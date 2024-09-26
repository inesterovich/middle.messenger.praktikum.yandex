


import FieldTemplate from './Field.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import { Label,  } from '../Label';
import { Input } from '../Input';
import { ErrorMessage } from '../ErrorMessage';

export interface FieldProps extends BlockProps {
    additionalFieldClass: string;
    labelClass?: string;
    labelText: string;
    inputType: 'text' | 'password' | 'email' | 'phone';
    placeholder: string;
    name: string;
    value: string;
    isError?: boolean;

    errorMessage?: string;
}

interface FieldPropsWithChildren extends BlockProps {
    extraClass: string;
    Label: Label;
    Input: Input;
    ErrorMessage: ErrorMessage;
    isError?: boolean;
  
}

// Здесь надо упаковать все внутренние компоненты
// Собираться всё должно здесь, а наружу торчать - только текстовые параметры


class Field extends Block {
     
   declare protected props: FieldPropsWithChildren;
    constructor(props: FieldProps) {
        const {  labelClass = '', labelText, name, value, inputType, placeholder, additionalFieldClass,isError = false, errorMessage= '', events = {} } = props;

        const LabelInstance = new Label({ labelFor: name, labelClass, labelText });
        const InputInstance = new Input({ type: inputType, placeholder, value, name });
        const ErrorMessageInstance = new ErrorMessage({ errorMessage });

        const preparedPropsWithChilren: FieldPropsWithChildren = {
            extraClass: additionalFieldClass, 
            Label: LabelInstance,
            Input: InputInstance,
            isError,
            ErrorMessage: ErrorMessageInstance,
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





