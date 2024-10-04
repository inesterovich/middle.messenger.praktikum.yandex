import MessageTemplate from "./Message.hbs?raw";

import Block, { BlockProps } from "../../framework/Block";

export interface MessageProps {
  direction: "left" | "right";
  messageId?: string;
  messageText: string;
  status: "sendng" | "recieved" | "read" | "error";
  time: string;
}

export interface MessagePropsWithChildren extends BlockProps {}

class Message extends Block {
  protected declare props: MessagePropsWithChildren;

  constructor(props: MessageProps) {
    const preparedPropsWithChilren: MessagePropsWithChildren = {
      ...props,
    };

    super(preparedPropsWithChilren);
  }

  public render(): string {
    return MessageTemplate;
  }
}

export default Message;
