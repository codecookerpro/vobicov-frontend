import { Component, h, State, Prop, Listen, Watch } from '@stencil/core';

@Component({
    tag: 'ia-counter',
    styleUrl: 'counter.css',
    shadow: false
})

export class Counter {
    private minToken?: HTMLBaseElement;
    private secToken?: HTMLBaseElement;
    private msecToken?: HTMLBaseElement;
    private prevTimePoint: Date;
    private milliseconds: number = 0;

    @Prop() started: Boolean;
    @State() language: string;

    @Listen('changedLanguage', {
        target: 'window',
    })
    changedLanguageHandler(event: CustomEvent) {
        this.language = event.detail.code;
    }

    @Watch('started')
    watchHandler(newValue: boolean) {
        if (newValue) {
            this.initClock();
        }
        else {
            this.killClock();
        }
    }

    updateClock() {
        var pad = function (val, n) {
            for (var r = val.toString(); r.length < n; r = 0 + r);
            return r;
        }

        const now = new Date;
        const diff = now.getTime() - this.prevTimePoint.getTime();
        const sec = Math.floor(diff / 1000);
        const min = Math.floor(sec / 60);

        this.minToken.textContent = pad(min, 2);
        this.secToken.textContent = pad(sec, 2);
        this.msecToken.textContent = pad(this.milliseconds, 2);
        this.milliseconds ++;
        
        if (this.milliseconds >= 100) {
            this.milliseconds = 0;
        }
    }

    initClock() {
        this.prevTimePoint = new Date();
        
        this.updateClock();
        
        var timerItem = localStorage.getItem('ia-covapp-counters');
        var timerIds: Array<number> = timerItem ? JSON.parse(timerItem) : [];

        timerIds.forEach(val => {
            window.clearInterval(val);
        });
        
        var newTimerId = window.setInterval(this.updateClock.bind(this), 10);
        timerIds.push(newTimerId);
        localStorage.setItem('ia-covapp-counters', JSON.stringify(timerIds));
    }

    killClock() {
        var timerItem = localStorage.getItem('ia-covapp-counters');
        var timerIds: Array<number> = timerItem ? JSON.parse(timerItem) : [];

        timerIds.forEach(val => {
            window.clearInterval(val);
        });

        localStorage.setItem('ia-covapp-counters', JSON.stringify([]));
    }
    
    render() {
        return (
            <div id="timedate">
                <a ref={ el => this.minToken = el as HTMLBaseElement }>00</a>:
                <a ref={ el => this.secToken = el as HTMLBaseElement }>00</a>:
                <a ref={ el => this.msecToken = el as HTMLBaseElement }>00</a>
            </div>
        );
    }
}
