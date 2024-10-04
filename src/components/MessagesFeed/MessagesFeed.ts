import MessagesFeedTemplate from "./MessagesFeed.hbs?raw";

import Block, { BlockProps } from "../../framework/Block";
import Message, { MessageProps } from "../Message/Message";

export interface MessagesFeedProps {
  messages: MessageProps[];
}

export interface MessagesFeedPropsWithChildren extends BlockProps {
  MessageItems: Message[];
}

class MessagesFeed extends Block {
  protected declare props: MessagesFeedPropsWithChildren;

  constructor(props: MessagesFeedProps) {
    const { messages } = props;

    const preparedPropsWithChilren: MessagesFeedPropsWithChildren = {
      MessageItems: messages.map((messageProps) => new Message(messageProps)),
    };

    super(preparedPropsWithChilren);
  }

  public render(): string {
    return MessagesFeedTemplate;
  }
}

export default MessagesFeed;
