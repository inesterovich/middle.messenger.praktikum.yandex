


import FormTemplate from './Form.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import Field from '../Field/Field';
import { Button } from '../Button';


interface FormPropsWithChildren extends BlockProps {
    additionalClass?: string;
    FieldItems: Field[],
    ButtonItems: Button[],
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





