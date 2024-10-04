import BlankChatTemplate from "./BlankChat.hbs?raw";

import Block, { BlockProps } from "../../framework/Block";

class BlankChat extends Block {
  constructor(props?: BlockProps) {
    super(props);
  }

  public render(): string {
    return BlankChatTemplate;
  }
}

export default BlankChat;
