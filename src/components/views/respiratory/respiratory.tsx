import { Component, h, State, Listen, Event } from '@stencil/core';
import { EventEmitter } from 'stencil-apexcharts/dist/types/stencil.core';

import i18next from '../../../global/utils/i18n';
import settings from '../../../global/utils/settings';
import 'stencil-apexcharts';
import $ from 'jquery';
import 'gasparesganga-jquery-loading-overlay';

const RESPIRATORY_STEPS = [
  { buttonKey: 'respiratory_recording_first_button', headerKey: null },
  { buttonKey: 'respiratory_recording_next_button', headerKey: 'respiratory_headline_1' },
  { buttonKey: 'respiratory_result_show_button', headerKey: 'respiratory_headline_2' },
  { buttonKey: null, headerKey: 'respiratory_headline_3' },
];

@Component({
  tag: 'ia-respiratory',
  styleUrl: 'respiratory.css',
  shadow: false
})
export class Respiratory {
  private soundData: {
    vocal_file: string,
    text_file: string
  } = { vocal_file: '', text_file: ''};
  private resultData: Object;

  @State() language: string;
  @State() vocalStarted: boolean = false;
  @State() textStarted: boolean = false;
  @State() vocalFinished: boolean = false;
  @State() textFinished: boolean = false;
  @State() currentStep: number = 0;
  @State() isLoading: boolean = true;
  @State() emptyChart: boolean = null;

  @Event() newAppMessage: EventEmitter;

  componentDidLoad() {
    $(".respiratory").LoadingOverlay("hide", {
      background  : "rgba(165, 190, 100, 0.5)"
    });
  }

  @Listen('emptyChart')
  handleEmptyChart(event: CustomEvent) {
    this.emptyChart = event.detail.empty && this.currentStep == 0;
  }

  @Listen('showLoading')
  showLoading() {
    $(".respiratory").LoadingOverlay("show");
  }
  
  @Listen('hideLoading')
  hideLoading() {
    $(".respiratory").LoadingOverlay("hide", true);
  }
  
  @Listen('changedLanguage', {
    target: 'window',
  })
  changedLanguageHandler(event: CustomEvent) {
    this.language = event.detail.code;
  }

  @Listen('stopRecord')
  stopRecordHandler(event: CustomEvent) {
    if (event.detail.id == 'vocal-recorder') {
      const reader = new FileReader();
      reader.readAsBinaryString(event.detail.blob);
      reader.onloadend = () => {
        this.soundData.vocal_file = btoa(reader.result.toString());
        this.vocalFinished = true;
      }
    }
    else if (event.detail.id == 'text-recorder') {
      const reader = new FileReader();
      reader.readAsBinaryString(event.detail.blob);
      reader.onloadend = () => {
        this.soundData.text_file = btoa(reader.result.toString());
        this.textFinished = true;
      }
    }
  }

  get currentLanguage() {
    return this.language || 'en';
  }

  moveNextStep() {
    this.emptyChart = false;
    
    if (this.vocalStarted == false) {
      this.vocalStarted = true;
    }
    else if (this.textStarted == false) {
      this.textStarted = true;
    }

    if (this.currentStep == 2) {
      this.showLoading();
      fetch('https://vobi.vocalsforscience.com/api/voice_analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Token': settings.getLocalStorageValue('token')
        },
        body: JSON.stringify(this.soundData)
      })
      .then(response => response.json())
      .then(data => {
        this.resultData = data;
        this.hideLoading();
        this.currentStep ++;
      })
      .catch(() => {
        this.newAppMessage.emit({
          type: 'error',
          text: 'Something went wrong',
          period: 5000
        });
        this.hideLoading();
      })
    }
    else {
      this.currentStep ++;
    }
  }

  movePreviousStep () {
    if (this.vocalStarted && this.textStarted) {
      this.textStarted = false;
    }
    else if (this.vocalStarted) {
      this.vocalStarted = false;
    }

    if (this.currentStep == 3) {
      this.currentStep = 0;
    }
    else {
      this.currentStep --;
    }

    if (this.currentStep == 0) {
      this.vocalFinished = false;
      this.textFinished = false;
    }
  }

  render() {
    return (
      <div class="card-wrapper respiratory">
        <d4l-card classes="card--desktop card--text-center">
          { this.currentStep > 0 && (
            <div class="u-margin-horizontal--card-negative" slot="card-header">
              <ia-navigation-header
                headline={i18next.t(RESPIRATORY_STEPS[this.currentStep].headerKey)}
                handleClick={ this.movePreviousStep.bind(this) }
              />
              <d4l-linear-progress data-test="progressBar" value={Math.round(100 * this.currentStep / 3)} />
            </div>
          )}
          <div class="start__content u-text-align--left" slot="card-content">
            {this.currentStep == 0 && (
              <ia-sample-chart />
            )}
            <br />
            {this.currentStep == 1 && (
              <div class="row">
                    <div class="col-md-12">
                        <p class="recoder-heading">
                          {i18next.t('respiratory_recording_vocal')}
                        </p>
                    </div>
                </div>
            )}
            {this.currentStep == 2 && (
              <div class="row">
                    <div class="col-md-12">
                        <p class="recoder-heading">
                          {i18next.t('respiratory_recording_text')}
                        </p>
                    </div>
                </div>
            )}

            <ia-sound-recorder recorderId="vocal-recorder" show={this.currentStep == 1}/>
            <ia-sound-recorder recorderId="text-recorder" show={this.currentStep == 2} />

            {this.currentStep == 3 && (
              <ia-fitness-result resultData={this.resultData} />
            )}
          </div>
          <div slot="card-footer">
            { this.emptyChart !== null && this.currentStep < 3 && (
              <d4l-button
                classes="button--block"
                class={this.emptyChart ? "move-center" : ""}
                data-test="continueButton"
                text={i18next.t(RESPIRATORY_STEPS[this.currentStep].buttonKey)}
                onClick={this.moveNextStep.bind(this)}
                disabled={this.currentStep == 1 && !this.vocalFinished || this.currentStep == 2 && !this.textFinished}
              />
            ) }
          </div>
        </d4l-card>
      </div>
    );
  }
}
