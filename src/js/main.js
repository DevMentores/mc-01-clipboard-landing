import "../scss/style.scss";

import javascriptLogo from "../assets/javascript.svg";
import viteLogo from "../assets/vite.svg";
import { setupCounter } from "./counter.js";

const bootStrapLogo =
	"https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">
    <img src="${bootStrapLogo}" class="logo" alt="Bootsrap logo" />
  </a>
    <h1 >Hello DevMentores!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
