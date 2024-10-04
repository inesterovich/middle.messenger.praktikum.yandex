import AvatarTemplate from "./Avatar.hbs?raw";

import Block, { BlockProps } from "../../framework/Block";
import { Img } from "../Img";
import { ImgProps } from "../Img/Img";

export interface AvatarProps {
  wrapperClassName?: string;
  src: ImgProps["src"];
  altText: ImgProps["altText"];
  caption?: string;
}

interface AvatarPropsWithChildren extends BlockProps {
  wrapperClassName: AvatarProps["wrapperClassName"];
  caption: AvatarProps["caption"];
  Img: Img;
}

class Avatar extends Block {
  protected declare props: AvatarPropsWithChildren;

  constructor(props: AvatarProps) {
    const {
      src,
      altText,
      caption = undefined,
      wrapperClassName = undefined,
    } = props;
    const preparedPropsWithChildren: AvatarPropsWithChildren = {
      wrapperClassName,
      caption,
      Img: new Img({ src, altText }),
    };
    super(preparedPropsWithChildren);
  }

  public render(): string {
    // !TODO: доделать компонент аватара - сделать его более функциональным, с разной версткой
    return AvatarTemplate;
  }
}

export default Avatar;
