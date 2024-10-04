import ChatTimeTemplate from './ChatTime.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';

export interface ChatTimeProps extends BlockProps {
  time: string;
}

class ChatTime extends Block {
  protected declare props: ChatTimeProps;

  constructor(props: ChatTimeProps) {
    super(props);
  }

  public render(): string {
    return ChatTimeTemplate;
  }
}

export default ChatTime;
