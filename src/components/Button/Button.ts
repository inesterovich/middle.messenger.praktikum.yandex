import { ButtonProps } from "../../App";
import { Block } from "../../utils/Block";
import { compile } from "handlebars";
import ButtonTemplate from './Button.hbs?raw';




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





