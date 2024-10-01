
import { FieldNames, validationRules } from './constants';


export const handleValidation = (e: Event) => {

    if (e instanceof FocusEvent && e.target instanceof HTMLInputElement) {
      
      const validationRule = validationRules[e.target.name as FieldNames];

      const isValid = validationRule.test(e.target.value);

  
   
      return isValid;
  

  }
  
  return true


};

