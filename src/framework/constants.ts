import { FieldProps } from "../components/Field/Field";

export type FieldNames = 'first_name'|'second_name'|'login' |'email'| 'password' | 'phone' | 'message';
type ValidationRegExp = Record<FieldNames, RegExp>;

type ValidationErrors = Record<FieldNames, string>

export const validationRules: ValidationRegExp = {
    first_name: /^[A-ZА-ЯЁ][a-zа-яё-]*$/,
    second_name: /^[A-ZА-ЯЁ][a-zа-яё-]*$/,
    login: /^(?=[A-Za-z]*\d*[A-Za-z])[A-Za-z\d_-]{3,20}$/,
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
    password: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d\S]{8,40}$/,
    phone: /^\+?[0-9]{10,15}$/,
    message: /.+/
};

export const validationErrors: ValidationErrors = {
    first_name: 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
    second_name: 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
    login: 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
    email: 'Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы',
    password: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    phone: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса',
    message: 'Не должно быть пустым'
}

export const fieldNames: Record<FieldNames, Omit<FieldProps, 'errorMessage' | 'value' | 'isError'>> = {
    first_name:{
        id: 'first_name',
        labelText: 'Имя',
        inputType: 'text',
        placeholder: 'Имя',
        name: 'first_name',
        extraClass: 'field-vertical',
     
    },
    second_name: {
        id: 'second_name',
        labelText: 'Фамилия',
        inputType: 'text',
        placeholder: 'Фамилия',
        name: 'second_name',
   
   
        extraClass: 'field-vertical',
    
    },
    login: {
        id: 'login',
        labelText: 'Логин',
        inputType: 'text',
        placeholder: 'Логин',
        name: 'login',

   
        extraClass: 'field-vertical',
     
    },
    email: {
        id: 'email',
        labelText: 'Почта',
        inputType: 'text',
        placeholder: 'Почта',
        name: 'email',
        extraClass: 'field-vertical',
    },
    password: {
        id: 'password',
        labelText: 'Пароль',
        inputType: 'password',
        placeholder: 'Пароль',
        name: 'password',
      
        extraClass: 'field-vertical',
      
    },
    phone: {
        id: 'phone',
        labelText: 'Телефон',
        inputType: 'text',
        placeholder: 'Телефон',
        name: 'phone',
        extraClass: 'field-vertical',
    
    },
    message: {
        id: 'message',
        labelText: '',
        inputType: 'text',
        name: 'message',
        extraClass: 'field-vertical',
        placeholder: 'Сообщение не может быть пустым'
    }
}
