


import FormTemplate from './Form.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import Field from '../Field/Field';


interface FormPropsWithChildren extends BlockProps {
    FieldItems: Field[],
    formTitle: string;
  
}


class Form extends Block {
     
   declare protected props: FormPropsWithChildren;
    constructor(props: FormPropsWithChildren) {
        super(props)
    }

    public render(): string {


        return FormTemplate

       

    }


 }

export default Form;





