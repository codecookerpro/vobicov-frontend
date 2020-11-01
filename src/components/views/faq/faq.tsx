import {
  Component,
  h,
  State,
  Prop,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import i18next from '../../../global/utils/i18n';

@Component({
  tag: 'ia-faq',
})
export class Faq {
  @Prop() history: RouterHistory;
  @Event() showLogoHeader: EventEmitter;

  @State() language: string;
  @Listen('changedLanguage', {
    target: 'window',
  })
  changedLanguageHandler(event: CustomEvent) {
    this.language = event.detail.code;
  }

  get currentLanguage() {
    return this.language || 'en';
  }

  componentWillLoad = () => {
    this.showLogoHeader.emit({ show: false });
  };

  render() {
    return (
      <div class="c-card-wrapper faq">
        <d4l-card classes="card--desktop card--text-center">
          <div class="u-margin-horizontal--card-negative" slot="card-header">
            <ia-navigation-header
              headline={i18next.t('faq_headline')}
              handleClick={() => this.history.push('/', {})}
            />
          </div>
          <div class="faq__content u-text-align--left" slot="card-content">
            <p innerHTML={i18next.t('faq_content')} />
          </div>
        </d4l-card>
      </div>
    );
  }
}
