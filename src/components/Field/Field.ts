


import FieldTemplate from './Field.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import { Label,  } from '../Label';
import { Input } from '../Input';

export interface FieldTextProps extends BlockProps {
    additionalFieldClass: string;
    labelClass: string;
    labelText: string;
    inputType: 'text' | 'password' | 'email' | 'phone';
    placeholder: string;
    name: string;
    value: string;
}

interface FieldProps extends BlockProps {
    extraClass: string;

    Label: Label;
    Input: Input;
  
}

// Здесь надо упаковать все внутренние компоненты
// Собираться всё должно здесь, а наружу торчать - только текстовые параметры


class Field extends Block {
     
   declare protected props: FieldProps;
    constructor(props: FieldTextProps) {
        const {  labelClass, labelText, name, value, inputType, placeholder, additionalFieldClass, events = {} } = props;

        const LabelInstance = new Label({ labelFor: name, labelClass, labelText });
        const InputInstance = new Input({ type: inputType, placeholder, value, name });

        const preparedPropsWithChilren: FieldProps = {
            extraClass: additionalFieldClass, 
            Label: LabelInstance,
            Input: InputInstance,
            ...events
        }

        /* Получаем текстовые параметры, а здесь формируем экземпляры классов */
        super(preparedPropsWithChilren)
    }

    public render(): string {


        return FieldTemplate

       

    }


 }

export default Field;





