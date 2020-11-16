import { Component, h, State, Prop, Listen, Event } from '@stencil/core';
import i18next from 'i18next';
import { EventEmitter } from 'stencil-apexcharts/dist/types/stencil.core';
import MicRecorder from 'mic-recorder-to-mp3';
// const MicRecorder = require('mic-recorder-to-mp3');

@Component({
    tag: 'ia-sound-recorder',
    styleUrl: 'sound-recorder.css',
    shadow: false
})
export class SoundRecorder {
    private recorder: MicRecorder;
    private stream: any;
    private spectrumWrapper: HTMLDivElement;
    private waveWrapper: HTMLDivElement;

    @Prop() show: boolean = true;
    @Prop() recorderId: string = 'sound-recorder';
    @Event() startRecord: EventEmitter;
    @Event() stopRecord: EventEmitter;
    @Event() newAppMessage: EventEmitter;
    @State() completed: boolean = false;
    @State() started: boolean = false;
    @State() language: string;
    @State() soundUrl: string;
    @Listen('changedLanguage', {
        target: 'window',
    })
    changedLanguageHandler(event: CustomEvent) {
        this.language = event.detail.code;
    }

    switchView() {
        if (this.completed) {
            this.spectrumWrapper.style.display = 'none';
            this.waveWrapper.style.display = 'block';
        }
        else {
            this.spectrumWrapper.style.display = 'block';
            this.waveWrapper.style.display = 'none';
        }
    }

    get currentLanguage() {
        return this.language || 'en';
    }

    start() {
        var visualizer = document.getElementById('visualizer');
        var paths = visualizer.getElementsByTagName('path');
        var mask = document.getElementById('mask');
        var bars = 100; // the number of bars
        var fftSize = 1024;
        var scale = 0.4;
        var freqSpan = Math.floor(scale * fftSize / bars);

        var soundAllowed = function (stream) {
            this.stream = stream;

            //Audio stops listening in FF without // window.persistAudioStream = stream;
            //https://bugzilla.mozilla.org/show_bug.cgi?id=965483
            //https://support.mozilla.org/en-US/questions/984179
            // window.persistAudioStream = stream;
            var audioContent = new AudioContext();
            var audioStream = audioContent.createMediaStreamSource(stream);
            var analyser = audioContent.createAnalyser();
            audioStream.connect(analyser);
            analyser.fftSize = fftSize;

            var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
            visualizer.setAttribute('viewBox', '0 0 100 255');

            //Through the frequencyArray has a length longer than bars, there seems to be no
            //significant data after this point. Not worth visualizing.
            for (var i = 0; i < bars; i++) {
                var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('stroke-dasharray', '4,1');
                mask.appendChild(path);
            }

            var doDraw = function () {
                requestAnimationFrame(doDraw);
                analyser.getByteFrequencyData(frequencyArray);

                for (var i = 0; i < bars; i++) {
                    var spec = Math.floor(frequencyArray[i * freqSpan] ? frequencyArray[i * freqSpan] : 0);
                    var adjustedLength = spec - spec % 5;
                    paths[i].setAttribute('d', 'M ' + (i) + ',255 l 0,-' + adjustedLength);
                }
            }
            doDraw();
 
            // this.recorder = new AudioRecorders(stream, { exportAudio: 'wav' });
            // this.recorder.onReceiveAudioBlob = (blob) => {
            //     this.started = false;
            //     this.completed = true;
            //     this.switchView();
            //     this.soundUrl = URL.createObjectURL(blob);
            //     this.stopRecord.emit({ blob, id: this.recorderId });
            // };

            // this.recorder.startRecord();
        }

        var soundNotAllowed = function () {
            this.newAppMessage.emit({
                type: 'warning',
                text: 'You must allow your microphone.'
            });
        }

        /*window.navigator = window.navigator || {};
        /*navigator.getUserMedia =  navigator.getUserMedia       ||
                                  navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia    ||
                                  null;*/
        navigator.getUserMedia({ audio: true }, soundAllowed.bind(this), soundNotAllowed.bind(this));

        // New instance
        this.recorder = new MicRecorder({
            bitRate: 128
        });
        
        // Start recording. Browser will request permission to use your microphone.
        this.recorder.start().then(() => {
            this.started = true;
            this.completed = false;
            this.switchView();
            this.startRecord.emit();
        }).catch((e) => {
            console.error(e);
        });
    }

    stop() {
        this.started = false;
        this.completed = true;

        this.stream.getTracks().forEach(function (track) {
            if (track.readyState == 'live' && track.kind === 'audio') {
                track.stop();
            }
        });

        this.recorder.stop().getMp3().then(([buffer, blob]) => {
            this.switchView();
            this.soundUrl = URL.createObjectURL(blob);
            this.stopRecord.emit({ blob, id: this.recorderId });
            buffer; // Unused
        }).catch((e) => {
            alert('We could not retrieve your message');
            console.log(e);
        });
    }

    render() {
        return this.show && (
            <div class="sound-recorder-wrapper">
                <div class="row">
                    <div class="col-md-8 col-sm-7 col-xs-12">
                        <div class="btn-group">
                            <div class="btn-group btn-group-justified" role="group">
                                <div class="btn-group" role="group">
                                    <button type="button" disabled={this.started} class="recorder-buttons btn btn-primary" onClick={this.start.bind(this)}>
                                        <i class="material-icons">mic</i>
                                        {i18next.t('respiratory_recording_start_button')}
                                    </button>
                                </div>
                                <div class="btn-group" role="group">
                                    <button type="button" disabled={!this.started} class="recorder-buttons btn btn-secondary" onClick={this.stop.bind(this)}>
                                        <i class="material-icons">stop</i>
                                        {i18next.t('respiratory_recording_stop_button')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-5 col-xs-6">
                        <ia-counter started={this.started} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 wrapper">
                        <div class="spectrum-wrapper" ref={el => this.spectrumWrapper = el as HTMLDivElement}>
                            <svg preserveAspectRatio="none" id="visualizer">
                                <defs>
                                    <mask id="mask">
                                        <g id="maskGroup"></g>
                                    </mask>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#ff0a0a', stopOpacity: '1' }} />
                                        <stop offset="20%" style={{ stopColor: '#f1ff0a', stopOpacity: '1' }} />
                                        <stop offset="90%" style={{ stopColor: '#d923b9', stopOpacity: '1' }} />
                                        <stop offset="100%" style={{ stopColor: '#050d61', stopOpacity: '1' }} />
                                    </linearGradient>
                                </defs>
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)"></rect>
                            </svg>
                        </div>
                        <div class="wavesurfer-wrapper" ref={el => this.waveWrapper = el as HTMLDivElement} style={{ display: 'none' }}>
                            {this.completed && (
                                <ws-audio-player audio={this.soundUrl} color="white" theme="dark" height="100" header={i18next.t('respiratory_recording_repley_sound')} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
