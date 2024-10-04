


import ChatTitleTemplate from './ChatTitle.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';



export interface ChatTitleProps extends BlockProps {
  title: string;
}


class ChatTitle extends Block {
     
  declare protected props: ChatTitleProps;

  constructor(props: ChatTitleProps) {
    super(props);
  }

  public render(): string {


    return ChatTitleTemplate;

       

  }


}

export default ChatTitle;





