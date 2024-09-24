
import { Block } from "../framework/Block";
import { compile } from "handlebars";
import ButtonTemplate from './Button.hbs?raw';
import { ButtonProps } from "../../types";




 class Button extends Block<ButtonProps> {
    constructor(props:ButtonProps) {
        super('button', props)
    }

    public render(): string {


        const template = compile<ButtonProps>(ButtonTemplate);

        return template(this.props);

       

    }


 }

export default Button;





