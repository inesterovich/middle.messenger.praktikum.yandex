import ImgTemplate from './Img.hbs?raw';
import Block, { BlockProps } from '../../framework/Block';

export interface ImgProps extends BlockProps {
  src: string;
  altText: string;
}

export default class Img extends Block {
  protected declare props: ImgProps;

  constructor(props: ImgProps) {
    super(props);
  }

  render(): string {
    return ImgTemplate;
  }
}
