


import ChatsPageTemplate from './ChatsPage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Footer } from '../../components/Footer';





interface ChatsPageProps extends BlockProps {
  footerClick: (page: string) => void
}

interface ChatsPagePropsWithChildren extends ChatsPageProps {
  Footer: Footer;
}


class ChatsPage extends Block {
     
  declare protected props: ChatsPageProps;

  constructor(props: ChatsPageProps) {
     
    const preparedPropsWidthChildren: ChatsPagePropsWithChildren = {
      ...props,
      Footer: new Footer({ footerClick : props.footerClick }),
    };

    super(preparedPropsWidthChildren);

       

  }

  public render(): string {


    return ChatsPageTemplate;

       

  }


}

export default ChatsPage;





