


import SelectedChatFooterTemplate from './SelectedChatFooter.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Form } from '../Form';
import { FormProps } from '../Form/Form';

export interface SelectedChatFooterProps {
   messageForm: FormProps
}

export interface SelectedChatFooterPropsWithChildren extends BlockProps {
    MessageForm: Form
}


class SelectedChatFooter extends Block {
     
  declare protected props: SelectedChatFooterPropsWithChildren;

    constructor(props: SelectedChatFooterProps) {

        const { messageForm } = props;
     
        const preparedPropsWithChilren: SelectedChatFooterPropsWithChildren = {
            MessageForm: new Form(messageForm)
        }
      

    super(preparedPropsWithChilren);
  }

  public render(): string {


    return SelectedChatFooterTemplate;

       

  }


}

export default SelectedChatFooter;





