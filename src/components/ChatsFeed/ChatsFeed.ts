


import ChatsFeedTemplate from './ChatsFeed.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Link } from '../Link';
import { Chat } from '../Chat';
import Form, { FormProps } from '../Form/Form';
import { LinkProps } from '../Link/Link';
import { ChatProps } from '../Chat/Chat';




export interface ChatsFeedProps  {
    profile: LinkProps;
    chats: ChatProps[];
    searchForm: FormProps
}

export interface ChatsFeedPropsWithChildren extends BlockProps {
    ProfileLink: Link;
    ChatItems: Chat[];
    SearchChatsForm: Form
}


class ChatsFeed extends Block {
     
  declare protected props: ChatsFeedPropsWithChildren;

    constructor(props: ChatsFeedProps) {

        const { profile, chats, searchForm } = props;
      
        const preparedPropsWithChildren: ChatsFeedPropsWithChildren = {
            ProfileLink: new Link(profile),
            ChatItems: chats.map((chatProps) => new Chat(chatProps)),
            SearchChatsForm: new Form(searchForm)
        }
    super(preparedPropsWithChildren);
  }

  public render(): string {


    return ChatsFeedTemplate;

       

  }


}

export default ChatsFeed;





