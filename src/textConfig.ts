
import { Input } from './components/Input';


export type FieldNames = 'login' | 'password' | 'email';




export const handleValidation = (e: Event, InputInstance: Input) => {

  if (e instanceof FocusEvent && e.target instanceof HTMLInputElement) {
       

    let regExp: RegExp;
    let isValid: boolean = true;

    if (e.target.name === 'first_name' || e.target.name === 'second_name') {
      regExp = /^[А-ЯЁa-z-]{1}[А-Яа-яёЁA-Za-z-]+$/;
      isValid = regExp.test(e.target.value);
    }

    if (e.target.name === 'login') {
      regExp = /[a-zA-Z0-9]{3,20}$/;

      isValid = regExp.test(e.target.value);

      // Логин может состоять только из цифр
    }

    if (e.target.name === 'email') {
      regExp = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
      // Некорректно работает
      isValid = regExp.test(e.target.value);
    }

    if (e.target.name === 'password') {
   
      regExp = /[a-zA-Z0-9]{8,40}$/;
      isValid = regExp.test(e.target.value);
    }
    if (e.target.name === 'phone') {
      regExp = /^[+0-9][0-9]{9,14}$/;
      isValid = regExp.test(e.target.value);
    }
    if (e.target.name === 'message') {
      isValid = !!e.target.value.length;
    }
   
   
    InputInstance.setProps({
      isError: !isValid,
      value: e.target.value,
    });
  

  

  }
  
  


};
// Не хватает функционала блока
