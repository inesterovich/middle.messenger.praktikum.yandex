


import FormTemplate from './Form.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import Field from '../Field/Field';


interface FormProps extends BlockProps {
    FieldItems: Field[],
    formTitle: string;
  
}


class Form extends Block {
     
   declare protected props: FormProps;
    constructor(props: FormProps) {
        super(props)
    }

    public render(): string {


        return FormTemplate

       

    }


 }

export default Form;





