


import MessageTemplate from './Message.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';

export interface MessageProps {
    direction: 'left' | 'right';
    messageId?: string;
    status: 'sendng' | 'recieved' | 'read' | 'error';
    time: string
}

export interface MessagePropsWithChildren extends BlockProps {
   Message: Message
}


class Message extends Block {
     
  declare protected props: MessagePropsWithChildren;

    constructor(props: MessageProps) {

       
        
        const preparedPropsWithChilren: MessagePropsWithChildren = {
           Message: new Message(props)
        }
      

    super(preparedPropsWithChilren);
  }

  public render(): string {


    return MessageTemplate;

       

  }


}

export default Message;





