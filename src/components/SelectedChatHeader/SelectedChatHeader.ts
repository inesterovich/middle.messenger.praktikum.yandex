


import SelectedChatHeaderTemplate from './SelectedChatHeader.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { AvatarProps } from '../Avatar/Avatar';
import { ButtonProps } from '../Button/Button';

export interface SelectedChatHeaderProps {
    avatar: AvatarProps;
    button: ButtonProps;
}

export interface SelectedChatHeaderPropsWithChildren extends BlockProps {
    UserAvatar: Avatar;
    DropdownButton: Button;
}


class SelectedChatHeader extends Block {
     
  declare protected props: SelectedChatHeaderPropsWithChildren;

    constructor(props: SelectedChatHeaderProps) {

        const { avatar, button } = props;
     
        const preparedPropsWithChilren: SelectedChatHeaderPropsWithChildren = {
            UserAvatar: new Avatar(avatar),
            DropdownButton: new Button(button)
        }
      

    super(preparedPropsWithChilren);
  }

  public render(): string {


    return SelectedChatHeaderTemplate;

       

  }


}

export default SelectedChatHeader;





