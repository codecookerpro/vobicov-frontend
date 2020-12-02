import { Component, h, State, Prop, Listen } from '@stencil/core';
import i18next from '../../../../global/utils/i18n';

@Component({
  tag: 'ia-fitness-result',
  styleUrl: 'fitness-result.css',
  shadow: false
})

export class FitnessResult {
  @State() language: string;
  @Prop() resultData: Object;

  @Listen('changedLanguage', {
    target: 'window',
  })

  changedLanguageHandler(event: CustomEvent) {
    this.language = event.detail.code;
  }

  render() {
    function round(val) {
      return Math.round(parseFloat(val) * 100) / 100;
    }

    const vocal = round(this.resultData['vocal']);
    const text = round(this.resultData['text']);
    const your_average_vocal = round(this.resultData['your_average_vocal']);
    const your_average_text = round(this.resultData['your_average_text']);
    const global_average_vocal = round(this.resultData['global_average_vocal']);
    const global_average_text = round(this.resultData['global_average_text']);

    return (
      <div class="card-wrapper fitness-result" >
        <div>
          <div class="p-2 bg-info">
            <h4 class="result-header">{i18next.t('respiratory_result_header_title')}</h4>
          </div>
          <div class="p-2 bg-info">
            <span class="result-header">{i18next.t('respiratory_result_header_content')}</span>
          </div>
        </div>
        <div class="result-frame">
          <ul class="list-group">
            <li class="list-group-item">
              <h5>{i18next.t('respiratory_result_header_1')}</h5>
            </li>
            <li class="list-group-item">
              <div class="result-progress">
                <h6>
                  <b>{vocal}/100</b>&nbsp;&nbsp;&nbsp;{i18next.t('respiratory_result_factor_1')}
                </h6>
                {i18next.t('respiratory_result_factor_1_desc')}
                <div class="progress">
                  <div class="progress-bar" style={{ width: vocal + "%" }}></div>
                </div>
              </div>
              <div class="result-progress">
                <h6>
                  <b>{text}/100</b>&nbsp;&nbsp;&nbsp;{i18next.t('respiratory_result_factor_2')}
                </h6>
                {i18next.t('respiratory_result_factor_2_desc')}
                <div class="progress">
                  <div class="progress-bar" style={{ width: text + "%" }}></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="result-frame">
          <ul class="list-group">
            <li class="list-group-item">
              <h5>{i18next.t('respiratory_result_header_2')}</h5>
            </li>
            <li class="list-group-item">
              <div class="table-responsive-sm">
                <table class="table">
                  <thead>
                    <tr>
                      <th>{i18next.t('respiratory_result_column_1')}</th>
                      <th>{i18next.t('respiratory_result_column_2')}</th>
                      <th>{i18next.t('respiratory_result_column_3')}</th>
                      <th>{i18next.t('respiratory_result_column_4')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i18next.t('respiratory_result_factor_1')}</td>
                      <td>{vocal}</td>
                      <td>{your_average_vocal}</td>
                      <td>{global_average_vocal}</td>
                    </tr>
                    <tr>
                      <td>{i18next.t('respiratory_result_factor_2')}</td>
                      <td>{text}</td>
                      <td>{your_average_text}</td>
                      <td>{global_average_text}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
