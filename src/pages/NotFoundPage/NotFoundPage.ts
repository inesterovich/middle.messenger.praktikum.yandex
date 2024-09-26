


import NotFoundPageTemplate from './NotFoundPage.hbs?raw';
import Block, { BlockProps } from "../../framework/Block";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';




interface NotFoundPageProps extends BlockProps {
    footerClick: (page: string) => void
}

interface NotFoundPagePropsWithChildren extends NotFoundPageProps {
    GoBackButton: Button;
    Footer: Footer;
}


class NotFoundPage extends Block {
     
   declare protected props: NotFoundPagePropsWithChildren;
    constructor(props: NotFoundPageProps) {
     
        const preparedPropsWithChilren: NotFoundPagePropsWithChildren = {
            ...props,
            GoBackButton: new Button({ text: 'Назад к чатам', mode: 'secondary', type: 'button' }),
            Footer: new Footer({ footerClick: props.footerClick})
        }

        super(preparedPropsWithChilren)

       

    }

    public render(): string {


        return NotFoundPageTemplate

       

    }


 }

export default NotFoundPage;





