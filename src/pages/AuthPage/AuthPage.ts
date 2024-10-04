import AuthPageTemplate from './AuthPage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Form } from '../../components/Form';
import { FieldProps } from '../../components/Field/Field';
import { Footer } from '../../components/Footer';
import { ButtonProps } from '../../components/Button/Button';
import {
  FieldNames,
  fieldNames,
  validationErrors,
} from '../../framework/constants';

interface AuthPageProps extends BlockProps {
  footerClick: (page: string) => void;
}

interface AuthPagePropsWithChildren extends AuthPageProps {
  AuthForm: Form;
  Footer: Footer;
}

class AuthPage extends Block {
  protected declare props: AuthPagePropsWithChildren;

  constructor(props: AuthPageProps) {
    const formFields: FieldNames[] = ['login', 'password'];

    const fieldsProps: FieldProps[] = formFields.map(
      (fieldName: FieldNames) => ({
        ...fieldNames[fieldName],
        value: '',
        isError: false,
        errorMessage: validationErrors[fieldName],
      }),
    );

    const buttonsProps: ButtonProps[] = [
      {
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
      },
    ];

    const preparedPropsWidthChildren: AuthPagePropsWithChildren = {
      ...props,
      AuthForm: new Form({
        formTitle: 'Авторизация',
        fields: fieldsProps,
        buttons: buttonsProps,
      }),
      Footer: new Footer({ footerClick: props.footerClick }),
    };
    super(preparedPropsWidthChildren);
  }

  public render(): string {
    return AuthPageTemplate;
  }
}

export default AuthPage;
