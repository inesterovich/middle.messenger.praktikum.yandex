


import ChatsFeedTemplate from './ChatsFeed.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Link } from '../Link';
import { Chat } from '.';
import Form from '../Form/Form';

export interface ChatsFeedPropsWithChildren extends BlockProps {
    ProfileLink: Link;
    ChatItems: Chat[];
    SearchChatForm: Form
}


class ChatsFeed extends Block {
     
  declare protected props: ChatsFeedPropsWithChildren;

  constructor(props: ChatsFeedPropsWithChildren) {
    super(props);
  }

  public render(): string {


    return ChatsFeedTemplate;

       

  }


}

export default ChatsFeed;





