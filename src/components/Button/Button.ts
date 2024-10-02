


import ButtonTemplate from './Button.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Img } from '../Img';
import { ImgProps } from '../Img/Img';


export interface ButtonProps {
    id?: string;
    text: string;
    mode: 'primary' | 'secondary' | 'round' | 'danger' | 'disabled';
    type: 'button' | 'submit';
    image?: ImgProps
}
export interface ButtonPropsWithChildren extends BlockProps {
  text: ButtonProps['text'];
  mode: ButtonProps['mode'],
  type: ButtonProps['type']
  Img?: Img;
}


class Button extends Block {
     
  declare protected props: ButtonPropsWithChildren;

    constructor(props: ButtonProps) {
        const { text, mode, type, image = undefined } = props;
        const preparedPropsWithChildren: ButtonPropsWithChildren = {
            text, mode, type, 
            Img: image ? new Img(image): undefined
      }
    super(preparedPropsWithChildren);
  }

  public render(): string {


    return ButtonTemplate;

       

  }


}

export default Button;





