import { Component, h } from '@stencil/core';

@Component({
  styleUrl: 'logo-widget.css',
  tag: 'ia-logo-widget',
  shadow: true,
})
export class LogoWidget {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 60 80"
      >
        <defs>
          <path id="a" d="M12 .27h55.019v78.984H12z" />
        </defs>
        <g fill="none" fill-rule="evenodd" transform="translate(-12)">
          <path d="M0 0h80v80H0z" />
          <clip id="b" fill="#fff">
            <use xlinkHref="#a" />
          </clip>
          <path
            fill="#000E7E"
            fill-rule="nonzero"
            d="M31.572 2.491c-1.82-.147-3.492 1.083-3.889 2.86l-1.062 4.754 35.257 7.88 1.063-4.753c.442-1.977-.812-3.948-2.794-4.39L32.082 2.568c-.168-.038-.34-.063-.51-.078zM21.588 25.96c-1.229-.1-2.357.73-2.626 1.93-.298 1.335.549 2.665 1.887 2.964l4.677 1.046c.114.024.23.042.345.051 1.228.1 2.356-.73 2.625-1.93.298-1.335-.549-2.665-1.887-2.964l-4.677-1.045c-.114-.026-.23-.043-.344-.052zm-1.564 6.997c-1.229-.1-2.357.73-2.626 1.93-.297 1.336.548 2.665 1.888 2.964l4.676 1.046c.113.025.23.043.345.052 1.227.099 2.357-.731 2.624-1.931.145-.646.029-1.311-.328-1.871-.357-.56-.91-.948-1.558-1.093l-4.676-1.045c-.114-.026-.23-.043-.345-.052zm-1.564 6.998c-1.229-.1-2.356.73-2.626 1.93-.298 1.334.55 2.664 1.887 2.963l4.678 1.046c.113.024.229.043.343.052 1.23.099 2.358-.73 2.626-1.931.145-.645.027-1.31-.33-1.87-.357-.56-.91-.948-1.557-1.093l-4.677-1.046c-.114-.025-.229-.042-.344-.051zm-1.564 6.997c-1.228-.101-2.357.729-2.625 1.929-.298 1.334.547 2.664 1.887 2.963l4.678 1.046c.112.025.228.044.343.052 1.228.1 2.357-.73 2.625-1.93.145-.646.028-1.31-.33-1.871-.356-.56-.91-.948-1.557-1.093l-4.677-1.045c-.114-.026-.229-.043-.344-.051zm-.7 9.8l35.257 7.88 9.944-44.492-35.257-7.88-2.647 11.84 3.596.803c1.225.274 2.27 1.009 2.944 2.068.675 1.058.896 2.313.624 3.532-.07.314-.178.627-.32.935-.02.044-.044.085-.07.123-.049.081-.072.12-.093.16-.12.218-.208.379-.33.54-.042.058-.086.108-.132.158l-.117.127c-.13.151-.247.285-.391.414-.065.058-.136.11-.207.161l-.7.528.389.737c.052.098.098.184.138.274.078.183.13.37.172.52l.045.148c.035.111.054.175.067.241.038.198.052.393.065.61.005.077.01.125.016.172.006.053.012.11.011.167-.001.338-.038.668-.108.982-.07.312-.177.627-.32.935-.026.057-.055.106-.088.158l-.06.101c-.123.225-.221.401-.343.565-.047.06-.095.114-.145.168l-.105.117c-.133.153-.25.286-.391.412-.058.052-.12.1-.184.147l-.73.547.4.741c.049.089.093.174.132.263.076.178.127.358.173.517l.043.145c.03.091.052.166.067.242.046.228.059.453.068.618l.009.11c.014.116.02.17.019.225-.002.342-.038.672-.109.986-.07.312-.176.627-.318.935-.029.056-.057.106-.089.155l-.079.133c-.107.197-.2.37-.327.536-.042.059-.087.109-.134.16l-.113.124c-.103.12-.234.271-.391.412-.063.057-.13.109-.199.158l-.719.532.41.759c.056.106.095.179.128.256.071.164.121.338.164.492l.052.17c.036.115.053.179.067.245.042.216.055.437.065.6.005.076.009.112.013.145.011.098.015.148.015.2-.002.34-.038.671-.109.986-.506 2.269-2.639 3.837-4.96 3.648-.217-.017-.436-.05-.65-.098l-3.597-.804-.561 2.511zm-1.544 6.908c-.214.957-.04 1.94.487 2.771.53.83 1.348 1.405 2.307 1.62l28.064 6.272c.149.033.299.048.412.057l.109.008.147-.002c.186.014.37.009.573-.014.182-.023.344-.055.554-.111.107-.03.138-.038.169-.05.121-.039.245-.089.393-.157.091-.042.174-.083.255-.13.097-.054.195-.115.289-.18.104-.07.198-.144.288-.22.094-.08.156-.133.213-.192.116-.115.202-.221.28-.32l.049-.06c.05-.06.079-.097.107-.137.08-.119.152-.244.236-.412l.088-.162c.115-.262.188-.48.237-.701l1.063-4.754-35.258-7.88-1.062 4.754zM57.65 79.23c-.318-.026-.63-.073-.928-.14l-10.524-2.35c-.142-.034-.275-.077-.407-.137l-.099-.041-.214-.027c-.192-.015-.326-.03-.449-.057l-28.063-6.273c-3.175-.71-5.183-3.862-4.476-7.028l2.131-9.537-.447-.283c-1.66-1.06-2.49-3.05-2.063-4.959.245-1.1.896-2.077 1.832-2.75l.543-.392-.326-.585c-.559-1.009-.732-2.17-.486-3.27s.897-2.078 1.832-2.75l.543-.392-.325-.586c-.559-1.008-.73-2.17-.486-3.269.246-1.1.897-2.076 1.833-2.751l.542-.39-.325-.586c-.559-1.009-.732-2.17-.487-3.269.428-1.908 2.028-3.358 3.98-3.608l.524-.068 4.217-18.863c.636-2.847 3.313-4.815 6.226-4.58.272.023.547.065.815.124l28.065 6.273c1.536.343 2.848 1.264 3.693 2.594.847 1.33 1.124 2.904.781 4.435l-4.32 19.335 1.053-.122c.294-.035.593-.04.886-.017.208.017.415.05.619.095 2.53.565 4.13 3.078 3.566 5.6l-3.287 14.71c-.157.702-.296 1.917-.17 3.026.214 1.893 1.085 2.475 1.778 2.63.288.063.534.236.693.484.158.247.211.538.148.821-.118.527-.617.891-1.162.847-.051-.005-.103-.012-.155-.024-1.09-.243-1.984-.867-2.583-1.8-.64-1.002-.956-2.361-.94-4.04l.003-.33c.036-1.02.185-1.879.249-2.2l3.264-14.607c.299-1.335-.547-2.665-1.886-2.963-.113-.027-.229-.043-.343-.053-1.228-.1-2.357.73-2.625 1.93l-7.82 34.986c-.072.328-.187.67-.347 1.046-.025.056-.055.116-.086.173l-.054.107c-.125.251-.251.47-.389.674-.057.086-.118.17-.182.25l-.86 1.085 7.057 1.578c.186.042.383.072.588.088 1.025.082 2.209-.155 3.164-.638.194-.097.405-.14.612-.123.05.005.098.01.146.022.464.104.803.475.861.945.06.47-.173.912-.594 1.129-1.31.67-2.89.988-4.336.871z"
            clip="url(#b)"
          />
          <path
            fill="#FF5F5A"
            fill-rule="nonzero"
            d="M45.071 51.71c.044.004.087.01.13.02.242.055.448.198.58.407l.915 1.444 1.446-.917c.17-.109.366-.157.566-.14.044.003.087.009.13.02.241.052.448.197.58.405.133.21.176.46.123.701-.055.241-.2.446-.408.578l-1.445.917.917 1.445c.133.208.176.455.123.696-.054.24-.199.447-.407.579-.172.11-.37.16-.57.143-.043-.003-.086-.01-.13-.019-.241-.054-.447-.198-.577-.406l-.92-1.447-1.443.918c-.17.11-.367.158-.566.141-.044-.003-.088-.01-.13-.019-.242-.054-.447-.198-.579-.407-.133-.21-.177-.46-.124-.7.055-.242.2-.447.408-.578l1.443-.917-.916-1.445c-.133-.208-.176-.455-.121-.696.054-.242.198-.449.407-.58.172-.11.368-.159.568-.142zm-16.13-1.574c.045.004.09.011.135.02l9.993 2.234c.564.126.914.715.78 1.311-.12.542-.606.919-1.127.877-.046-.005-.09-.012-.137-.021l-9.992-2.234c-.27-.06-.5-.228-.647-.472-.152-.25-.199-.548-.133-.84.12-.541.605-.917 1.127-.875zm23.383-6.805c.048.004.097.012.145.023.274.06.505.227.653.47.304.49.156 1.145-.328 1.46l-5.433 3.554c-.196.13-.417.188-.645.17-.05-.004-.098-.012-.147-.022-.274-.062-.507-.23-.654-.473l-1.517-2.462c-.303-.49-.156-1.147.328-1.463.194-.127.417-.186.646-.167.048.005.096.012.145.023.272.06.504.228.653.469l.96 1.56 4.548-2.974c.196-.129.418-.186.646-.168zm-21.59-1.224c.046.004.09.011.137.02l9.993 2.234c.563.126.913.715.78 1.312-.121.542-.607.918-1.128.876-.046-.004-.091-.011-.137-.02l-9.992-2.234c-.564-.126-.913-.714-.78-1.312.121-.541.605-.918 1.128-.876zm23.384-6.804c.048.004.097.011.146.022.274.062.507.228.653.47.304.49.156 1.145-.33 1.46l-5.432 3.554c-.194.13-.415.188-.643.17-.05-.005-.098-.012-.147-.023-.276-.062-.509-.23-.655-.471l-1.517-2.463c-.304-.492-.157-1.147.327-1.462.195-.127.418-.185.645-.166.048.003.097.011.146.021.273.061.504.228.654.47l.96 1.559 4.548-2.973c.194-.13.416-.186.645-.168zm-21.59-1.224c.047.004.091.01.137.02l9.992 2.234c.27.06.5.228.648.473.151.249.199.547.133.837-.121.542-.606.92-1.128.877-.046-.004-.09-.011-.136-.02l-9.993-2.234c-.269-.06-.499-.229-.646-.473-.151-.25-.2-.548-.134-.84.121-.54.606-.917 1.128-.874zm7.02-14.015c.16.012.32.036.476.071.888.199 1.646.73 2.135 1.496l.734 1.153 1.154-.73c.63-.399 1.354-.578 2.092-.518.159.013.32.037.476.073.89.198 1.648.73 2.135 1.496.488.766.648 1.675.45 2.56-.197.885-.73 1.64-1.498 2.126l-5.961 3.77c-.207.13-.444.188-.686.168-.052-.004-.105-.012-.157-.023-.29-.066-.538-.24-.697-.49l-3.791-5.949c-.488-.766-.649-1.677-.45-2.56.197-.886.729-1.64 1.497-2.126.63-.399 1.354-.578 2.092-.517zm-.874 2.418c-.547.349-.708 1.078-.362 1.625l3.173 5.024 5.013-3.196c.514-.344.668-1.053.349-1.586-.167-.276-.431-.466-.745-.536-.053-.013-.108-.02-.162-.025-.245-.02-.486.038-.698.167l-2.09 1.333c-.207.132-.444.192-.684.172-.053-.005-.105-.012-.158-.024-.289-.065-.538-.24-.7-.492l-1.324-2.103c-.167-.263-.427-.445-.732-.512-.055-.013-.11-.021-.165-.025-.251-.021-.498.04-.715.178z"
            clip="url(#b)"
          />
        </g>
      </svg>
    );
  }
}
