

import { compile } from "handlebars";
import ButtonTemplate from './Button.hbs?raw';
import { BlockProps, ButtonProps } from "../../types";
import Block from "../../framework/Block";




 class Button extends Block {
    constructor(props: BlockProps) {
        super(props)
    }

    public render(): string {


        const template = compile<BlockProps>(ButtonTemplate);

        return template(this.props);

       

    }


 }

export default Button;





