


import ButtonTemplate from './Button.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Img } from '../Img';


export interface ButtonPropsWithChildren extends BlockProps {
  text: string;
  mode: 'primary' | 'secondary' | 'round' | 'danger' | 'disabled',
  type: 'button' | 'submit'
  Image?: Img;
}


class Button extends Block {
     
  declare protected props: ButtonPropsWithChildren;

  constructor(props: ButtonPropsWithChildren) {
    super(props);
  }

  public render(): string {


    return ButtonTemplate;

       

  }


}

export default Button;





