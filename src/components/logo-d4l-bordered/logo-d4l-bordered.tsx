import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ia-logo-d4l-bordered',
  styleUrl: 'logo-d4l-bordered.css',
  shadow: true,
})
export class BorderedLogo {
  @Prop() size: 'medium' | 'small' = 'medium';

  render() {
    const { size } = this;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        width="40"
        height="40"
        class={`bordered-logo--size-${size}`}
      >
        <g fill="none" fill-rule="evenodd">
          <rect
            width="54"
            height="54"
            x="1"
            y="1"
            fill="#FFFAF9"
            stroke="#FFD2C3"
            stroke-width="2"
            rx="12"
          />
          <g fill-rule="nonzero">
            <path d="M10.866 15.045h34.269v26.746H10.866z" />
            <path
              fill="#000E7E"
              d="M10.866 39.521c0-1.337.774-2.273 1.902-2.273.64 0 1.13.287 1.395.892v-2.6h.623v6.151H14.2v-.923c-.257.642-.791 1.023-1.5 1.023-1.104 0-1.834-.92-1.834-2.27zm3.307.094v-.18c0-.99-.49-1.649-1.316-1.649-.836 0-1.333.652-1.333 1.735 0 1.077.497 1.735 1.326 1.735.816 0 1.323-.678 1.323-1.641zm1.874.93c0-.419.189-.756.542-.974.319-.184.757-.304 1.46-.39l.987-.115v-.07c0-.892-.32-1.25-1.076-1.25-.669 0-1.076.338-1.11.953h-.669c.055-.893.747-1.458 1.768-1.458 1.193 0 1.707.538 1.707 1.795v1.127c0 .675.044 1.164.14 1.521h-.647a5.754 5.754 0 01-.08-.869c-.212.609-.78.97-1.548.97-.888.006-1.474-.495-1.474-1.24zm2.996-.746v-.278l-1.262.174c-.757.104-1.086.354-1.086.833 0 .468.374.762.97.762.826 0 1.378-.609 1.378-1.491zm1.5-2.448h.82v-1.466h.623v1.467h1.148v.502h-1.148v2.604c0 .512.23.74.692.74.155 0 .305-.018.453-.054v.545a2.16 2.16 0 01-.614.077c-.863 0-1.155-.512-1.155-1.284v-2.628h-.819v-.502zm3.3 3.193c0-.418.189-.755.542-.973.319-.184.757-.304 1.46-.39l.987-.115v-.07c0-.892-.319-1.25-1.076-1.25-.669 0-1.076.338-1.11.953h-.669c.055-.893.747-1.458 1.768-1.458 1.193 0 1.707.538 1.707 1.795v1.127c0 .675.045 1.164.14 1.521h-.647a5.626 5.626 0 01-.079-.869c-.212.609-.781.97-1.549.97-.884.006-1.473-.495-1.473-1.24zm2.999-.745v-.278l-1.261.174c-.757.104-1.086.354-1.086.833 0 .468.373.762.97.762.825 0 1.377-.609 1.377-1.491zm5.22.31v1.582h-.614V40.11H28.46v-.442l2.943-4.129h.658v4.07h.82v.5h-.82zm-.597-3.868h-.017a4.02 4.02 0 01-.425.736l-1.405 1.97a5.07 5.07 0 01-.497.658h2.33v-2.508c-.003-.404-.003-.578.014-.856zm3.194 5.45h-.614v-6.152h.614v6.152zm2.556-5.74a.517.517 0 01-.524.511.52.52 0 01-.524-.511c0-.285.236-.512.524-.512.291 0 .524.23.524.512zm-.833 5.74h.614v-4.34h-.614v4.34zm4.366-3.838h-1.155v3.838h-.613v-3.838h-.819v-.502h.819v-.628c0-.782.473-1.284 1.244-1.284.178-.003.353.017.524.06v.522a2.867 2.867 0 00-.445-.044c-.497 0-.713.261-.713.823v.548h1.158v.505zm4.387 1.822h-3.229c.01.98.562 1.578 1.422 1.578.623 0 1.065-.338 1.254-.93l.524.208c-.274.806-.925 1.257-1.823 1.257-1.26 0-2.001-.79-2.001-2.247 0-1.424.747-2.3 1.974-2.3 1.192 0 1.878.695 1.878 2.013v.421zm-.63-.572c0-.892-.464-1.37-1.255-1.37-.826 0-1.326.555-1.343 1.447h2.597v-.077zM10.866 15.045c4.164 0 7.54 3.293 7.54 7.355s-3.377 7.355-7.54 7.355v-14.71zm29.471 10.197v-10.03h-4.626v14.376h9.424v-4.346h-4.799zm-10.795-.501c-1.418 0-2.57 1.123-2.57 2.507 0 1.384 1.152 2.507 2.57 2.507 1.42 0 2.57-1.123 2.57-2.507 0-1.384-1.15-2.507-2.57-2.507zm-2.912-1.506l5.483-8.023H26.63l-5.484 8.024h5.483z"
            />
          </g>
        </g>
      </svg>
    );
  }
}
