import { ButtonProps } from "../../App";
import { Block } from "../../utils/Block";

export class Button extends Block<ButtonProps> {
    constructor(props:ButtonProps) {
        super('button', props)
    }

    public render(): string {

        const { } = this.props;

        
        return ''
    }


}


