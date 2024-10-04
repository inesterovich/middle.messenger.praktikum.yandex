


import ChatTemplate from './Chat.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { ChatTitle } from '../ChatTitle';
import { ChatDescription } from '../ChatDescription';
import { Avatar } from '../Avatar';
import { ImgProps } from '../Img/Img';
import { ChatTime } from '../ChatTime';
import { ChatCounter } from '../ChatCounter';

export interface ChatProps {
  uid?: string;
  imgProps: ImgProps;
  title: string;
  description: string;
  time: string;
  counter: number;
  onClick?: (e: Event) => void;
}

export interface ChatPropsWithChildren extends BlockProps {
  Avatar: Avatar;
  ChatTitle: ChatTitle;
  ChatDescription: ChatDescription;
  ChatTime: ChatTime;
  ChatCounter: ChatCounter;
}


class Chat extends Block {
     
  declare protected props: ChatPropsWithChildren;

  constructor(props: ChatProps) {
    const { imgProps, title, description, time, counter } = props;
    const preparedPropsWithChilren: ChatPropsWithChildren = {
      Avatar: new Avatar(imgProps),
      ChatTitle: new ChatTitle({ title }),
      ChatDescription: new ChatDescription({ description }),
      ChatTime: new ChatTime({ time }),
      ChatCounter: new ChatCounter({ counter }),
      events: {
        click: (e) => props.onClick && props.onClick(e),
      },
    };
      

    super(preparedPropsWithChilren);
  }

  public render(): string {


    return ChatTemplate;

       

  }


}

export default Chat;





