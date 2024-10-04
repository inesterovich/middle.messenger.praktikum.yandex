import ChatsPageTemplate from "./ChatsPage.hbs?raw";

import Block, { BlockProps } from "../../framework/Block";
import { Footer } from "../../components/Footer";
import ChatsFeed, {
  ChatsFeedProps,
} from "../../components/ChatsFeed/ChatsFeed";

import mockChatProps from "../../mocks/chats_mock.json";
import { BlankChat } from "../../components/BlankChat";
import { SelectedChat } from "../../components/SelectedChat";

import mockMessages from "../../mocks/messages_mock.json";
import { MessageProps } from "../../components/Message/Message";
import { FieldProps } from "../../components/Field/Field";
import {
  FieldNames,
  fieldNames,
  validationErrors,
} from "../../framework/constants";

interface ChatsPageProps extends BlockProps {
  footerClick: (page: string) => void;
}

interface ChatsPagePropsWithChildren extends BlockProps {
  selectedChat: number | string | false;
  SelectedChat: SelectedChat;
  ChatsFeed: ChatsFeed;
  BlankChat: BlankChat;
  Footer: Footer;
}

class ChatsPage extends Block {
  protected declare props: ChatsPageProps;

  constructor(props: ChatsPageProps) {
    const { footerClick } = props;
    const chatsfeed: ChatsFeedProps = {
      profile: {
        href: "/profile",
        className: "link-profile",
        dataPage: "profile",
        text: "Профиль",
      },
      chats: mockChatProps,
      searchForm: {
        fields: [
          {
            id: "search-chats",
            inputType: "text",
            placeholder: "Поиск",
            extraClass: "search-chats",
            value: "",
            name: "searchChats",
            isError: false,
          },
        ],
        additionalClass: "form-chats",
        buttons: [],
      },
    };

    const formFields: FieldNames[] = ["message"];

    const fieldsProps: FieldProps[] = formFields.map(
      (fieldName: FieldNames) => ({
        ...fieldNames[fieldName],
        value: "",
        isError: false,
        errorMessage: validationErrors[fieldName],
      }),
    );

    const preparedPropsWidthChildren: ChatsPagePropsWithChildren = {
      selectedChat: false,
      SelectedChat: new SelectedChat({
        header: {
          avatar: {
            src: "/Union.svg",
            altText: "user Avatar",
          },
          button: {
            text: "",
            type: "button",
            mode: "round",
            image: {
              src: "/DropdownButton.svg",
              altText: "Future Drowdown",
            },
          },
          userName: "Test User",
        },
        messages: mockMessages as MessageProps[],
        footer: {
          messageForm: {
            fields: fieldsProps,
            additionalClass: "form-message",
            buttons: [
              {
                mode: "round",
                type: "submit",
                text: "",
                image: {
                  src: "/Arrow.svg",
                  altText: "goBack image",
                },
              },
            ],
          },
        },
      }),
      ChatsFeed: new ChatsFeed({
        ...chatsfeed,
        onChatClick: (e) => {
          this.setSelectedChat.bind(this)(e);
        },
      }),
      BlankChat: new BlankChat(),
      Footer: new Footer({ footerClick }),
    };

    super(preparedPropsWidthChildren);
  }

  protected setSelectedChat(e: Event) {
    e.preventDefault();

    this.setProps({ selectedChat: 1 });
  }

  public render(): string {
    return ChatsPageTemplate;
  }
}

export default ChatsPage;
