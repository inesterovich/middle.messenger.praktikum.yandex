


import ServerErrorPageTemplate from './ServerErrorPage.hbs?raw';
import Block, { BlockProps } from "../../framework/Block";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';




interface ServerErrorPageProps extends BlockProps {
    footerClick: (page: string) => void
}

interface ServerErrorPagePropsWithChildren extends ServerErrorPageProps {
    statusCode: number;
    GoBackButton: Button;
    Footer: Footer;
}


class ServerErrorPage extends Block {
     
   declare protected props: ServerErrorPagePropsWithChildren;
    constructor(props: ServerErrorPageProps) {
     
        const preparedPropsWithChilren: ServerErrorPagePropsWithChildren = {
            ...props,
            statusCode: 500,
            GoBackButton: new Button({ text: 'Назад к чатам', mode: 'secondary', type: 'button' }),
            Footer: new Footer({ footerClick: props.footerClick})
        }

        super(preparedPropsWithChilren)

       

    }

    public render(): string {


        return ServerErrorPageTemplate

       

    }


 }

export default ServerErrorPage;





