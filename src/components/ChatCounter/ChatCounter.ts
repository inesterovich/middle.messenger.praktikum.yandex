


import ChatCounterTemplate from './ChatCounter.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';



export interface ChatCounterProps extends BlockProps {
  counter: number;
}


class ChatCounter extends Block {
     
  declare protected props: ChatCounterProps;

  constructor(props: ChatCounterProps) {
    super(props);
  }

  public render(): string {


    return ChatCounterTemplate;

       

  }


}

export default ChatCounter;





