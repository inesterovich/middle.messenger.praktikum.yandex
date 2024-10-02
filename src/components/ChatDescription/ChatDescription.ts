


import ChatDescriptionTemplate from './ChatDescription.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';



export interface ChatDescriptionPropsWithChildren extends BlockProps {
    description: string;
}


class ChatDescription extends Block {
     
  declare protected props: ChatDescriptionPropsWithChildren;

  constructor(props: ChatDescriptionPropsWithChildren) {
    super(props);
  }

  public render(): string {


    return ChatDescriptionTemplate;

       

  }


}

export default ChatDescription;





