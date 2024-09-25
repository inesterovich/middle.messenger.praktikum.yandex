//import { App } from "./App";
import { Button } from "./components/Button";
import { Img } from "./components/Img";
import "./styles/app.scss?inline";
import { render } from "./utils/render";



document.addEventListener("DOMContentLoaded", () => {
    const button = new Button(
        {
            mode: 'primary', text: 'default text',
            type: 'button',
            Image: new Img({ src: '/Arrow.svg', altText: 'sampleText' })
        });
    render('#app', button);




});
