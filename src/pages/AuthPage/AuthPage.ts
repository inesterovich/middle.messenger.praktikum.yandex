


import AuthPageTemplate from './AuthPage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import Form from '../../components/Form/Form';
import { Field } from '../../components/Field';
import { FieldProps } from '../../components/Field/Field';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonPropsWithChildren } from '../../components/Button/Button';
import { FieldNames, fieldNames, validationErrors } from '../../framework/constants';





interface AuthPageProps extends BlockProps {
  footerClick: (page: string) => void
  
}

interface AuthPagePropsWithChildren extends AuthPageProps {
  AuthForm: Form;
  Footer: Footer;
}


class AuthPage extends Block {
     
  declare protected props: AuthPagePropsWithChildren;

  constructor(props: AuthPageProps) {
   
    const formFields: FieldNames[] = ['login', 'password']
      
    const fieldsProps: FieldProps[] = formFields.map((fieldName: FieldNames) => ({
        ...fieldNames[fieldName],
        value: '',
        isError: false, 
        errorMessage: validationErrors[fieldName]
    }))

    const buttonsProps: ButtonPropsWithChildren[] =  [{
      id: 'submit',
      mode: 'primary',
      type: 'submit',
      text: 'Авторизоваться',
    },
    {
      id: 'register',
      mode: 'secondary',
      type: 'button',
      text: 'Нет аккаунта?',
    }];

    const preparedPropsWidthChildren: AuthPagePropsWithChildren = {
      ...props,
      AuthForm: new Form({
        formTitle: 'Авторизация',
        FieldItems: fieldsProps.map((childProps) => new Field({
          ...childProps })),
        ButtonItems: buttonsProps.map((childProps) => new Button(childProps)),

      }), Footer: new Footer({ footerClick: props.footerClick }),
    };
    super(preparedPropsWidthChildren);

       

  }

  public render(): string {


    return AuthPageTemplate;

       

  }


}

export default AuthPage;





