import SelectedChatTemplate from "./SelectedChat.hbs?raw";

import Block, { BlockProps } from "../../framework/Block";
import { SelectedChatHeader } from "../SelectedChatHeader";
import { MessagesFeed } from "../MessagesFeed";
import { SelectedChatFooter } from "../SelectedChatFooter";
import { SelectedChatHeaderProps } from "../SelectedChatHeader/SelectedChatHeader";
import { SelectedChatFooterProps } from "../SelectedChatFooter/SelectedChatFooter";
import { MessageProps } from "../Message/Message";

export interface SelectedChatProps {
  header: SelectedChatHeaderProps;
  messages: MessageProps[];
  footer: SelectedChatFooterProps;
}

export interface SelectedChatPropsWithChildren extends BlockProps {
  SelectedChatHeader: SelectedChatHeader;
  MessagesFeed: MessagesFeed;
  SelectedChatFooter: SelectedChatFooter;
}

class SelectedChat extends Block {
  protected declare props: SelectedChatPropsWithChildren;

  constructor(props: SelectedChatProps) {
    const { header, messages, footer } = props;

    const preparedPropsWithChilren: SelectedChatPropsWithChildren = {
      SelectedChatHeader: new SelectedChatHeader(header),
      MessagesFeed: new MessagesFeed({ messages }),
      SelectedChatFooter: new SelectedChatFooter(footer),
    };

    super(preparedPropsWithChilren);
  }

  public render(): string {
    return SelectedChatTemplate;
  }
}

export default SelectedChat;
