import { Component, h, State, Prop, Listen, Event } from '@stencil/core';
import i18next from '../../../../global/utils/i18n';
import settings from '../../../../global/utils/settings';
import { EventEmitter } from 'stencil-apexcharts/dist/types/stencil.core';
import 'stencil-apexcharts';

@Component({
  tag: 'ia-sample-chart',
  styleUrl: 'sample-chart.css'
})
export class SampleChart {
  @Prop() hideOnEmpty: boolean = false;
  @Prop() dayLimit: number = 1;
  @Prop() sampleData: [] = null;

  @State() language: string;
  @State() options: Object = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    stroke: {
      width: [3, 3],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },
    colors: ['#ffa45b', '#ffda77'],
    fill: {
      opacity: [0.85, 0.85],
    },
    labels: [],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      min: 0,
      max: 100
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0);
          }
          return y;
        }
      }
    }
  };
  @State() series = [
    {
      name: i18next.t('respiratory_chart_factor_1'),
      type: 'line',
      data: []
    }, {
      name: i18next.t('respiratory_chart_factor_2'),
      type: 'line',
      data: []
    }
  ];
  @Event() showLoading: EventEmitter;
  @Event() hideLoading: EventEmitter;
  @Event() emptyChart: EventEmitter;
  // @Event() newAppNotification: EventEmitter;
  // @Event() newAppMessage: EventEmitter;
  @State() dataBinding: 'empty' | 'unkown' | 'loaded' = 'unkown';

  @Listen('changedLanguage', {
    target: 'window',
  })
  changedLanguageHandler(event: CustomEvent) {
    this.language = event.detail.code;
  }

  get currentLanguage() {
    return this.language || 'en';
  }

  componentWillLoad() {

    if ( ! this.sampleData) {
      this.showLoading.emit();
    } 
    else {
      this.series[0].data.splice(0);
      this.series[1].data.splice(0);
      this.options['labels'].splice(0);
      this.emptyChart.emit({ empty: false });
      
      if (this.sampleData.length < this.dayLimit) {
        this.dataBinding = 'empty';
      }
      else {
        this.sampleData.forEach(item => {
          this.series[0].data.push(parseInt(item['vocal']));
          this.series[1].data.push(parseInt(item['text']));
  
          this.options['labels'].push(item['day']);
        });
        this.dataBinding = 'loaded';
      }

      return;
    }

    const token = settings.getLocalStorageValue('token');

    if ( ! token ) {
      this.dataBinding = 'empty';
      this.hideLoading.emit();
      this.emptyChart.emit({ empty: true });
      return;
    }

    fetch('https://vobi.vocalsforscience.com/api/samples', {
      headers: {
        'X-Token': token
      }
    })
    .then(response => response.json())
    .then(data => {
      this.series[0].data.splice(0);
      this.series[1].data.splice(0);
      this.options['labels'].splice(0);
      this.emptyChart.emit({ empty: false });
      
      if (!data || data.length < this.dayLimit) {
        this.dataBinding = 'empty';
        this.emptyChart.emit({ empty: true });
      }
      else {
        data.forEach(item => {
          this.series[0].data.push(parseInt(item['vocal']));
          this.series[1].data.push(parseInt(item['text']));
  
          this.options['labels'].push(item['day']);
        });
        this.emptyChart.emit({ empty: false });
        this.dataBinding = 'loaded';
        // this.newAppNotification.emit({ 
        //   heading: 'Information', 
        //   text: 'Use VOBI every day to have a history of your respiratory results', 
        //   stack: false, 
        //   icon: 'info',
        //   hideAfter: 5000,
        //   position: 'bottom-right' 
        // });
      }

      this.hideLoading.emit();
    });
  }

  render() {
    return (
      <div class="sample-chart-wrapper" style={{ minHeight: this.hideOnEmpty ? '0px' : '365px' }}>
        {this.dataBinding == 'loaded' && (
          <div>
            <apex-chart
              series={this.series}
              options={this.options}
              class={this.language}
            />
          </div>
        )}
        {this.dataBinding == 'empty' && this.hideOnEmpty == false && (
          <img src="assets/images/chart-bg.png" class="empty-chart-img"></img>
        )}
      </div>
    );
  }
}
