


import FormTemplate from './Form.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import Field, { FieldProps } from '../Field/Field';
import { Button } from '../Button';
import { ButtonProps } from '../Button/Button';


//  Можно саму форму переделать, чтобы наружу ни один компонент не торчал - подавать только текст
export interface FormProps {
    additionalClass?: string;
    fields: FieldProps[];
    buttons: ButtonProps[];
    formTitle?: string;
}
interface FormPropsWithChildren extends BlockProps {
  additionalClass?: FormProps['additionalClass'];
    FieldItems: Field[];
    ButtonItems: Button[];
  formTitle: FormProps['formTitle'];
  
}


class Form extends Block {
     
  declare protected props: FormPropsWithChildren;

    constructor(props: FormProps) {

        const { additionalClass, formTitle, fields, buttons } = props;
      
        const preparedPropsWithChildren: FormPropsWithChildren = {
            formTitle, additionalClass,
            FieldItems: fields.map((fieldProps) => new Field(fieldProps)),
            ButtonItems: buttons.map((buttonProps) => new Button(buttonProps))
        }
     
    super({
      ...preparedPropsWithChildren,
      events: {
        submit: (e) => {
          e.preventDefault();
          this.onSubmit.bind(this)();
        },
      },
    });
  }

  private onSubmit() {
      const form = this._element;
      
      const isValid = !(this.lists.FieldItems as Field[]).map((Field) => Field.errorStatus).includes(true)

      if (!isValid) {
          console.log('form has validation error, abort submit');

          return;
      }

     debugger

    if (form && form instanceof HTMLFormElement) {
            
      const formValues: Record<string, string> = {};

       
      Array.from(form.elements).forEach((field) => {
        if (field instanceof HTMLInputElement) {
          formValues[field.name] = field.value;
        }
      });

      console.log(formValues);
            
    }
  } 
     

  public render(): string {


    return FormTemplate;

       

  }


}

export default Form;





