


import AuthPageTemplate from './AuthPage.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import Form from '../../components/Form/Form';
import { Field } from '../../components/Field';
import { Label } from '../../components/Label';
import { FieldTextProps } from '../../components/Field/Field';
import { Footer } from '../../components/Footer';




interface AuthPageProps extends BlockProps {

  
}


class AuthPage extends Block {
     
   declare protected props: AuthPageProps;
    constructor(props: AuthPageProps) {

        const testFieldConfig: FieldTextProps = {
    
            labelFor: "login",
            labelText: "Логин",
            inputType: "text",
            placeholder: "Логин",
            name: "login",
            value: "",
            labelClass: '',
            additionalFieldClass: "field-vertical",
        }
        super({
            ...props,
            AuthForm: new Form({
                formTitle: 'Авторизация',
                FieldItems: [ new Field(testFieldConfig) ]
        }), Footer: new Footer({})
        })
    }

    public render(): string {


        return AuthPageTemplate

       

    }


 }

export default AuthPage;





