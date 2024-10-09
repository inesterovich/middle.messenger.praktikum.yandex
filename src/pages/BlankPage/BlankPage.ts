import BlankPageTemplate from './BlankPage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Footer } from '../../components/Footer';

interface BlankPageProps extends BlockProps {
  footerClick: (page: string) => void;
}

interface BlankPagePropsWithChildren extends BlankPageProps {
  Footer: Footer;
}

class BlankPage extends Block {
  protected declare props: BlankPageProps;

  constructor(props: BlankPageProps) {
    const preparedPropsWidthChildren: BlankPagePropsWithChildren = {
      ...props,
      Footer: new Footer({ footerClick: props.footerClick }),
    };

    super(preparedPropsWidthChildren);
  }

  public render(): string {
    return BlankPageTemplate;
  }
}

export default BlankPage;
