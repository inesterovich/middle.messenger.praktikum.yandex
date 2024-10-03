


import AvatarTemplate from './Avatar.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Img } from '../Img';
import { ImgProps } from '../Img/Img';

export interface AvatarProps {
    src: ImgProps['src'];
    altText: ImgProps['altText']
}

interface AvatarPropsWithChildren extends BlockProps {
   Img: Img
}


class Avatar extends Block {
     
  declare protected props: AvatarPropsWithChildren;

    constructor(props: AvatarProps) {
        const { src, altText } = props;
      const preparedPropsWithChildren: AvatarPropsWithChildren = { Img: new Img({src, altText})}
    super(preparedPropsWithChildren);
  }

  public render(): string {

    // !TODO: доделать компонент аватара - сделать его более функциональным, с разной версткой
    return AvatarTemplate;

       

  }


}

export default Avatar;





