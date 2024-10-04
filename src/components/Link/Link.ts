import LinkTemplate from "./Link.hbs?raw";

import Block, { BlockProps } from "../../framework/Block";

export interface LinkProps extends BlockProps {
  href: string;
  className: string;
  dataPage: string;
  text: string;
  onClick?: (e: Event) => void;
}

class Link extends Block {
  protected declare props: LinkProps;

  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  public render(): string {
    return LinkTemplate;
  }
}

export default Link;
