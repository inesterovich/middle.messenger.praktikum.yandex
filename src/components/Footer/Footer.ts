


import FooterTemplate from './Footer.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import Field from '../Field/Field';
import { Link } from '../Link';


interface FooterProps extends BlockProps {
    
  
}


class Footer extends Block {
     
   declare protected props: FooterProps;
    constructor(props: FooterProps) {
        super({
            ...props,

            LinkAuth: new Link({ href: '/auth', className: 'footer-link', dataPage: 'auth', text: 'Авторизация' }),
            LinkRegister: new Link({ href: '/register', className: 'footer-link', dataPage: 'register', text: 'Регистрация' }),
            LinkProfile: new Link({ href: '/profile', className: 'footer-link', dataPage: 'profile', text: 'Профиль' }),
            LinkServerError: new Link({ href: '/serverError', className: 'footer-link', dataPage: 'serverError', text: 'Ошибка сервера' }),
            LinkNotFound: new Link({ href: '/notFound', className: 'footer-link', dataPage: 'notFound', text: 'Ошибка 404' })
        
        
        })
    }

    public render(): string {
// Props, PropwWithChildren

        return FooterTemplate

       

    }


 }

export default Footer;





