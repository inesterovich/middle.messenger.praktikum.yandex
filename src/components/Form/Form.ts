


import FormTemplate from './Form.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import Field from '../Field/Field';
import { Button } from '../Button';


//  Можно саму форму переделать, чтобы наружу ни один компонент не торчал - подавать только текст
interface FormPropsWithChildren extends BlockProps {
    additionalClass?: string;
    FieldItems: Field[],
    ButtonItems: Button[],
    formTitle: string;
  
}


class Form extends Block {
     
   declare protected props: FormPropsWithChildren;
    constructor(props: FormPropsWithChildren) {
     
        super(props);
    }
/*
    private onSubmit() {
        const form = this._element;

     

        if (form && form instanceof HTMLFormElement) {
            
            const formData = new FormData(form);
            const formValues: Record<string, string> = {}

       
            Array.from(form.elements).forEach((field) => {
                if (field instanceof HTMLInputElement) {
                    formValues[field.name] = field.value
                }
            })

            console.log(formValues);
            
        }
    } */
     

    public render(): string {


        return FormTemplate

       

    }


 }

export default Form;





