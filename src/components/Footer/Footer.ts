


import FooterTemplate from './Footer.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';

import { Link } from '../Link';


interface FooterProps extends BlockProps {
  footerClick: (page: string) => void
  
}

interface FooterPropsWithChildren extends FooterProps {
  LinkAuth: Link;
  LinkRegister: Link;
  LinkProfile: Link;
  LinkServerError: Link;
  LinkNotFound: Link;

}


class Footer extends Block {
     
  declare protected props: FooterPropsWithChildren;

  constructor(props: FooterProps) {

    const { footerClick } = props;

    const footerPropsWithChildren: FooterPropsWithChildren = {
      ...props,

      LinkAuth: new Link({
        href: '/auth',
        className: 'footer-link',
        dataPage: 'auth',
        text: 'Авторизация',
        onClick: (e) => {
          e.preventDefault();
          footerClick('auth');
        },
      }),
      LinkRegister: new Link({
        href: '/register',
        className: 'footer-link',
        dataPage: 'register',
        text: 'Регистрация',
        onClick: (e) => {
                  
          e.preventDefault();
          footerClick('register');
        },
      }),
      LinkProfile: new Link({
        href: '/profile', className: 'footer-link', dataPage: 'profile', text: 'Профиль',
        onClick: (e) => {
          e.preventDefault();
          footerClick('profile');
        },
        
      }),
      LinkServerError: new Link({
        href: '/serverError', className: 'footer-link', dataPage: 'serverError', text: 'Ошибка сервера',
        onClick: (e) => {
          e.preventDefault();
          footerClick('serverError');
        },
      }),
      LinkNotFound: new Link({
        href: '/notFound', className: 'footer-link', dataPage: 'notFound', text: 'Ошибка 404',
        onClick: (e) => {
          e.preventDefault();
          footerClick('notFound');
        },
        
      }),
        
        
    };
    super(footerPropsWithChildren);
  }

  public render(): string {
    // Props, PropwWithChildren

    return FooterTemplate;

       

  }


}

export default Footer;





