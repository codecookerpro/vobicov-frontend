import { Component, h } from '@stencil/core';

@Component({
  styleUrl: 'logo-d4l-powered-by.css',
  tag: 'ia-logo-d4l-powered-by',
  shadow: true,
})
export class LogoD4LPoweredBy {
  render() {
    return (
      <a
        href="https://www.data4life.care/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="data4life"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 35"
          class="logo-d4l-powered-by"
        >
          <g fill="#000E7E">
            <path d="M2.657 4V2.637h.737c.691 0 1.133-.385 1.133-.987S4.085.663 3.394.663H2.21V4h.447zm.69-1.739h-.69V1.039h.69c.433 0 .71.24.71.611s-.277.611-.71.611zm2.534 1.795c.662 0 1.095-.465 1.095-1.231S6.543 1.594 5.88 1.594c-.663 0-1.095.465-1.095 1.231s.432 1.231 1.095 1.231zm0-.347c-.423 0-.672-.301-.672-.884s.249-.884.672-.884c.423 0 .672.301.672.884s-.25.884-.672.884zM8.38 4l.447-1.692c.018-.075.042-.193.051-.263h.01c.01.07.033.188.051.263L9.387 4h.437l.663-2.35h-.414L9.65 3.328a4.18 4.18 0 00-.052.277H9.59c-.014-.094-.042-.193-.061-.277L9.1 1.65h-.432L8.24 3.328c-.019.084-.047.183-.061.277h-.01a4.18 4.18 0 00-.051-.277L7.695 1.65h-.414L7.944 4h.437zm3.483.056c.475 0 .818-.225.982-.653l-.329-.146c-.103.287-.324.447-.625.447-.418 0-.696-.3-.7-.762h1.668V2.66c0-.705-.366-1.066-1-1.066-.673 0-1.068.474-1.068 1.26 0 .775.4 1.202 1.072 1.202zm.592-1.438h-1.264c.01-.442.244-.71.658-.71.385 0 .606.226.606.659v.051zM13.918 4V2.994c0-.282.01-.597.235-.822.113-.113.272-.184.517-.184h.019v-.39c-.029-.004-.057-.004-.085-.004-.357 0-.602.263-.714.592V1.65h-.372V4h.4zm2.124.056c.475 0 .818-.225.982-.653l-.329-.146c-.103.287-.324.447-.625.447-.418 0-.695-.3-.7-.762h1.669V2.66c0-.705-.367-1.066-1.002-1.066-.672 0-1.066.474-1.066 1.26 0 .775.399 1.202 1.071 1.202zm.592-1.438H15.37c.01-.442.244-.71.658-.71.385 0 .606.226.606.659v.051zm1.805 1.438c.367 0 .62-.178.762-.493V4h.376V.593h-.4v1.405c-.15-.278-.38-.404-.69-.404-.588 0-1.002.507-1.002 1.231 0 .738.385 1.231.954 1.231zm.108-.352c-.4 0-.639-.33-.639-.879 0-.555.24-.879.64-.879.394 0 .638.315.638.827v.108c0 .503-.249.823-.639.823zm4.268.352c.587 0 .968-.498.968-1.231 0-.72-.371-1.231-.945-1.231a.797.797 0 00-.747.465V.592h-.4V4h.306l.07-.404c.123.272.39.46.748.46zm-.108-.352c-.395 0-.625-.32-.625-.808v-.123c0-.512.235-.827.63-.827.418 0 .648.353.648.879 0 .536-.244.879-.653.879zm1.696 1.236c.395 0 .677-.197.893-.79l.917-2.5h-.432l-.546 1.636a3.288 3.288 0 00-.08.277h-.009a2.126 2.126 0 00-.08-.277l-.601-1.636h-.447l.935 2.322-.06.174c-.109.305-.255.432-.537.432-.051 0-.108 0-.169-.01v.353c.075.014.146.019.216.019zM0 32.963c0-1.2.678-2.04 1.665-2.04.561 0 .99.258 1.221.801V29.39h.546v5.52h-.513v-.828c-.225.576-.693.918-1.314.918C.639 35 0 34.175 0 32.963zm2.895.084v-.162c0-.888-.429-1.479-1.152-1.479-.732 0-1.167.585-1.167 1.557 0 .966.435 1.557 1.161 1.557.714 0 1.158-.609 1.158-1.473zm1.641.834c0-.375.165-.678.474-.873.279-.165.663-.273 1.278-.351l.864-.102v-.063c0-.801-.279-1.122-.942-1.122-.585 0-.942.303-.972.855h-.585c.048-.801.654-1.308 1.548-1.308 1.044 0 1.494.483 1.494 1.611v1.011c0 .606.039 1.044.123 1.365h-.567a5.233 5.233 0 01-.069-.78c-.186.546-.684.87-1.356.87-.777.006-1.29-.444-1.29-1.113zm2.622-.669v-.249l-1.104.156c-.663.093-.951.318-.951.747 0 .42.327.684.849.684.723 0 1.206-.546 1.206-1.338zm1.314-2.196h.717v-1.317h.546v1.317h1.005v.45H9.735v2.337c0 .459.201.663.606.663.135 0 .267-.015.396-.048v.489a1.809 1.809 0 01-.537.069c-.756 0-1.011-.459-1.011-1.152v-2.358h-.717v-.45zm2.889 2.865c0-.375.165-.678.474-.873.279-.165.663-.273 1.278-.351l.864-.102v-.063c0-.801-.279-1.122-.942-1.122-.585 0-.942.303-.972.855h-.585c.048-.801.654-1.308 1.548-1.308 1.044 0 1.494.483 1.494 1.611v1.011c0 .606.039 1.044.123 1.365h-.567a5.233 5.233 0 01-.069-.78c-.186.546-.684.87-1.356.87-.774.006-1.29-.444-1.29-1.113zm2.625-.669v-.249l-1.104.156c-.663.093-.951.318-.951.747 0 .42.327.684.849.684.723 0 1.206-.546 1.206-1.338zm4.569.279v1.419h-.537v-1.419h-2.616v-.396l2.577-3.705h.576v3.651h.717v.45h-.717zm-.522-3.471h-.015a3.63 3.63 0 01-.372.66l-1.23 1.767a4.33 4.33 0 01-.435.591h2.04v-2.25a9.824 9.824 0 01.012-.768zm2.796 4.89h-.537v-5.52h.537v5.52zm2.238-5.151a.459.459 0 11-.918 0 .459.459 0 01.918 0zm-.729 5.151h.537v-3.894h-.537v3.894zm3.822-3.444h-1.011v3.444h-.537v-3.444h-.717v-.45h.717v-.564c0-.702.414-1.152 1.089-1.152.156-.003.309.015.459.054v.468a2.42 2.42 0 00-.39-.039c-.435 0-.624.234-.624.738v.492h1.014v.453zM30 33.101h-2.826c.009.879.492 1.416 1.245 1.416.546 0 .933-.303 1.098-.834l.459.186c-.24.723-.81 1.128-1.596 1.128-1.104 0-1.752-.708-1.752-2.016 0-1.278.654-2.064 1.728-2.064 1.044 0 1.644.624 1.644 1.806v.378zm-.552-.513c0-.801-.405-1.23-1.098-1.23-.723 0-1.161.498-1.176 1.299h2.274v-.069zM0 11a6.6 6.6 0 010 13.2V11zm25.8 9.15v-9h-4.05v12.9H30v-3.9h-4.2zm-9.45-.45a2.25 2.25 0 10.002 4.502 2.25 2.25 0 00-.002-4.502zm-2.55-1.35l4.8-7.2h-4.8L9 18.35h4.8z" />
          </g>
        </svg>
      </a>
    );
  }
}