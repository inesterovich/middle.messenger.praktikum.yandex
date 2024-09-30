


import LabelTemplate from './Label.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';



interface LabelProps extends BlockProps {
  labelFor: string;
  labelClass: string;
  labelText: string;
  
}


class Label extends Block {
     
  declare protected props: LabelProps;

  constructor(props: LabelProps) {
    super(props);
  }

  public render(): string {


    return LabelTemplate;

       

  }


}

export default Label;





