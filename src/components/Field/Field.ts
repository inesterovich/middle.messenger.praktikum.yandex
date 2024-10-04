


import FieldTemplate from './Field.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Label  } from '../Label';
import { Input } from '../Input';
import { ErrorMessage } from '../ErrorMessage';
import { handleValidation } from '../../framework/handleValidation';

export interface FieldProps {
  id: string;
  extraClass: string;
  labelClass?: string;
  labelText?: string;
  inputType: 'text' | 'password' | 'email' | 'phone';
  placeholder: string;
  name: string;
  value: string;
  isError: boolean;
  errorMessage?: string;
  events?: BlockProps['events']
}

interface FieldPropsWithChildren extends BlockProps {
  extraClass: string;
  Label?: Label;
  Input: Input;
  ErrorMessage: ErrorMessage;
  isError?: boolean;
  
}

// Здесь надо упаковать все внутренние компоненты
// Собираться всё должно здесь, а наружу торчать - только текстовые параметры


class Field extends Block {
     
  declare protected props: FieldPropsWithChildren;

  constructor(props: FieldProps) {
    const { labelClass = '', labelText = undefined, name, value, inputType, placeholder, extraClass, isError = false, errorMessage = '', events = {} } = props;
    
    

    const preparedPropsWithChilren: FieldPropsWithChildren = {
      extraClass, 
      Label: labelText ? new Label({ labelFor: name, labelClass, labelText }) : undefined,
      Input: new Input({
        type: inputType, placeholder, value, name,
        events: {
          blur: (e) => {
            this.validate.bind(this)(e);
      
          },
        },
          
      }),
      isError,
      ErrorMessage: new ErrorMessage({ errorMessage }),
      ...events,
    };

    /* Получаем текстовые параметры, а здесь формируем экземпляры классов */
    super(preparedPropsWithChilren);
  }
    
  protected validate(e: Event) {
    const isValid = handleValidation(e);
    this.setProps({ isError: !isValid });
  }
    
  public get errorStatus() {
    return this.props.isError;
  }

  public render(): string {


    return FieldTemplate;

       

  }


}

export default Field;





