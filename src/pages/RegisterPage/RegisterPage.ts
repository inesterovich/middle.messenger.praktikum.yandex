


import RegisterPageTemplate from './RegisterPage.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
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
            id: "email",
            labelText: "Почта",
            inputType: "text",
            placeholder: "Почта",
            name: "email",
            value: "",
            isError: false,
            errorMessage: "Неверный email",
            extraClass: "field-vertical",
          },
          {
            id: "login",
            labelText: "Логин",
            inputType: "text",
            placeholder: "Логин",
            name: "login",
            value: "",
            errorMessage: "Неверный логин",
              extraClass: "field-vertical",
            isError: false,
          },
          {
            id: "first_name",
            labelText: "Имя",
            inputType: "text",
            placeholder: "Имя",
            name: "first_name",
            value: "",
            errorMessage: "Введите имя",
              extraClass: "field-vertical",
            isError: false
          },
          {
            id: "second_name",
            labelText: "Фамилия",
            inputType: "text",
            placeholder: "Фамилия",
            name: "second_name",
            value: "",
            errorMessage: "Введите фамилию",
              extraClass: "field-vertical",
            isError: false
          },
          {
            id: "phone",
            labelText: "Телефон",
            inputType: "text",
            placeholder: "Телефон",
            name: "phone",
            value: "",
            errorMessage: "Введите телефон",
              extraClass: "field-vertical",
            isError: false
          },

          {
            id: "password",
            labelText: "Пароль",
            inputType: "password",
            placeholder: "Пароль",
            name: "password",
            value: "",
            errorMessage: "Неверный пароль",
              extraClass: "field-vertical",
            isError: false
          },
        ]

        const buttonParams: ButtonPropsWithChildren[] =  [{
            id: "register",
            mode: "primary",
            type: "submit",
            text: "Зарегистрироваться"
        },
        {
            id: "login",
            mode: "secondary",
            type: "button",
            text: "Войти"
        },
        ]

        const preparedPropsWidthChildren: RegisterPagePropsWithChildren = {
            ...props,
            RegisterForm: new Form({
                formTitle: 'Авторизация',
                FieldItems: testFieldConfig.map((childProps) => new Field(childProps)),
                ButtonItems: buttonParams.map((childProps) => new Button(childProps))

        }), Footer: new Footer({ footerClick: props.footerClick})
        }
        super(preparedPropsWidthChildren)

       

    }

    public render(): string {


        return RegisterPageTemplate

       

    }


 }

export default RegisterPage;





