//import { App } from "./App";
import { Button } from "./components/Button";
import "./styles/app.scss?inline";
import { render } from "./utils/render";



document.addEventListener("DOMContentLoaded", () => {
    const button = new Button({  mode: 'primary', text: 'default text', type: 'button', settings: { withInternalID: true} });
    render('#app', button);

    setTimeout(() => {
        button.setProps({ text: 'New Text'})
    }, 1000)


});
