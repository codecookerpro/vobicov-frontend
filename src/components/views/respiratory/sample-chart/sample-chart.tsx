import { Component, h, State, Listen, Event } from '@stencil/core';
import i18next from '../../../../global/utils/i18n';
import settings from '../../../../global/utils/settings';
import { EventEmitter } from 'stencil-apexcharts/dist/types/stencil.core';
import 'stencil-apexcharts';

@Component({
  tag: 'ia-sample-chart',
  styleUrl: 'sample-chart.css'
})
export class SampleChart {
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

    fill: {
      opacity: [0.85, 0.25],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: [],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      min: 0
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
      type: 'area',
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
    this.showLoading.emit();

    const token = settings.getLocalStorageValue('token');

    if ( ! token ) {
      this.dataBinding = 'empty';
      this.hideLoading.emit();
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
      
      if (!data || data.length < 1) {
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
      <div class="sample-chart-wrapper" style={{ minHeight: '365px' }}>
        {this.dataBinding == 'loaded' && (
          <div>
            <apex-chart
                series={this.series}
                options={this.options}
            />
          </div>
        )}
        {this.dataBinding == 'empty' && (
          <img src="assets/images/chart-bg.png" class="empty-chart-img"></img>
        )}
      </div>
    );
  }
}
