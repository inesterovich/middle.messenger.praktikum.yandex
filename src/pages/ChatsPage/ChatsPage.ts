


import ChatsPageTemplate from './ChatsPage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Footer } from '../../components/Footer';
import ChatsFeed, { ChatsFeedProps } from '../../components/ChatsFeed/ChatsFeed';

import mockChatProps from '../../mocks/chats_mock.json';



interface ChatsPageProps extends BlockProps {
    
    footerClick: (page: string) => void;
}

interface ChatsPagePropsWithChildren extends BlockProps {
    ChatsFeed: ChatsFeed;
  Footer: Footer;
}


class ChatsPage extends Block {
     
  declare protected props: ChatsPageProps;

    constructor(props: ChatsPageProps) {
      
        const { footerClick } = props;
        const chatsfeed: ChatsFeedProps = {
            profile: {
                href: '/profile',
                className: 'link-profile',
                dataPage: 'profile',
                text: 'Профиль'
            
            },
            chats: mockChatProps,
            searchForm: {
 
                fields: [
                    {
                        id: 'search-chats',
                        labelText: '', labelClass: '', inputType: 'text', placeholder: 'Поиск', extraClass: 'search-chats', value: '', name: 'searchChats', isError: false
                    }],
                additionalClass: 'form-chats',
                buttons: []
            }
        }; // Сделать моковые данные 
     
    const preparedPropsWidthChildren: ChatsPagePropsWithChildren = {
        ChatsFeed: new ChatsFeed(chatsfeed),
      Footer: new Footer({ footerClick  }),
    };

    super(preparedPropsWidthChildren);

       

  }

  public render(): string {


    return ChatsPageTemplate;

       

  }


}

export default ChatsPage;





