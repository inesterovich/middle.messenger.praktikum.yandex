


import RegisterPageTemplate from './RegisterPage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import Form from '../../components/Form/Form';
import { Field } from '../../components/Field';
import { FieldProps } from '../../components/Field/Field';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonPropsWithChildren } from '../../components/Button/Button';




interface RegisterPageProps extends BlockProps {
  footerClick: (page: string) => void
  
}

interface RegisterPagePropsWithChildren extends RegisterPageProps {
  RegisterForm: Form;
  Footer: Footer;
}


class RegisterPage extends Block {
     
  declare protected props: RegisterPagePropsWithChildren;

  constructor(props: RegisterPageProps) {
   

    const testFieldConfig: FieldProps[] = [{
      id: 'email',
      labelText: 'Почта',
      inputType: 'text',
      placeholder: 'Почта',
      name: 'email',
      value: '',
      isError: false,
      errorMessage: 'латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы',
      extraClass: 'field-vertical',
    },
    {
      id: 'login',
      labelText: 'Логин',
      inputType: 'text',
      placeholder: 'Логин',
      name: 'login',
      value: '',
      errorMessage: 'Логин может быть от 3 до 20 сиволов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (может содержать только дефис)',
      extraClass: 'field-vertical',
      isError: false,
    },
    {
      id: 'first_name',
      labelText: 'Имя',
      inputType: 'text',
      placeholder: 'Имя',
      name: 'first_name',
      value: '',
      errorMessage: 'Поле может содержать только символы латиницы, кириллицы, дефис. Первый символ - заглавный',
      extraClass: 'field-vertical',
      isError: false,
    },
    {
      id: 'second_name',
      labelText: 'Фамилия',
      inputType: 'text',
      placeholder: 'Фамилия',
      name: 'second_name',
      value: '',
      errorMessage: 'Поле может содержать только символы латиницы, кириллицы, дефис. Первый символ - заглавный',
      extraClass: 'field-vertical',
      isError: false,
    },
    {
      id: 'phone',
      labelText: 'Телефон',
      inputType: 'text',
      placeholder: 'Телефон',
      name: 'phone',
      value: '',
      errorMessage: 'от 10 до 15 символов, состоит из цифр, может начинаться с плюса',
      extraClass: 'field-vertical',
      isError: false,
    },

    {
      id: 'password',
      labelText: 'Пароль',
      inputType: 'password',
      placeholder: 'Пароль',
      name: 'password',
      value: '',
      errorMessage: 'Пароль может быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
      extraClass: 'field-vertical',
      isError: false,
    },
    ];

    const buttonParams: ButtonPropsWithChildren[] =  [{
      id: 'register',
      mode: 'primary',
      type: 'submit',
      text: 'Зарегистрироваться',
    },
    {
      id: 'login',
      mode: 'secondary',
      type: 'button',
      text: 'Войти',
    },
    ];

    const preparedPropsWidthChildren: RegisterPagePropsWithChildren = {
      ...props,
      RegisterForm: new Form({
        formTitle: 'Авторизация',
        FieldItems: testFieldConfig.map((childProps) => new Field(childProps)),
        ButtonItems: buttonParams.map((childProps) => new Button(childProps)),

      }), Footer: new Footer({ footerClick: props.footerClick }),
    };
    super(preparedPropsWidthChildren);

       

  }

  public render(): string {


    return RegisterPageTemplate;

       

  }


}

export default RegisterPage;





