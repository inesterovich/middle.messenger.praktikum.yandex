


import ChatDescriptionTemplate from './ChatDescription.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';



export interface ChatDescriptionProps extends BlockProps {
    description: string;
}


class ChatDescription extends Block {
     
  declare protected props: ChatDescriptionProps;

  constructor(props: ChatDescriptionProps) {
    super(props);
  }

  public render(): string {


    return ChatDescriptionTemplate;

       

  }


}

export default ChatDescription;





