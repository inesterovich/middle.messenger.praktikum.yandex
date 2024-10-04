import RegisterPageTemplate from './RegisterPage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Form } from '../../components/Form';
import { FieldProps } from '../../components/Field/Field';
import { Footer } from '../../components/Footer';
import { ButtonPropsWithChildren } from '../../components/Button/Button';
import {
  FieldNames,
  fieldNames,
  validationErrors,
} from '../../framework/constants';

interface RegisterPageProps extends BlockProps {
  footerClick: (page: string) => void;
}

interface RegisterPagePropsWithChildren extends RegisterPageProps {
  RegisterForm: Form;
  Footer: Footer;
}

class RegisterPage extends Block {
  protected declare props: RegisterPagePropsWithChildren;

  constructor(props: RegisterPageProps) {
    const formFields: FieldNames[] = [
      'email',
      'login',
      'first_name',
      'second_name',
      'phone',
      'password',
    ];

    const fieldsProps: FieldProps[] = formFields.map(
      (fieldName: FieldNames) => ({
        ...fieldNames[fieldName],
        value: '',
        isError: false,
        errorMessage: validationErrors[fieldName],
      }),
    );

    const buttonsProps: ButtonPropsWithChildren[] = [
      {
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
        formTitle: 'Регистрация',
        fields: fieldsProps,
        buttons: buttonsProps,
      }),
      Footer: new Footer({ footerClick: props.footerClick }),
    };
    super(preparedPropsWidthChildren);
  }

  public render(): string {
    return RegisterPageTemplate;
  }
}

export default RegisterPage;
