import { IPageConfig } from "./App";

export const authPage: IPageConfig = {
    fields: [
      {
        id: "login",
        labelFor: "login",
        labelText: "Логин",
        inputType: "text",
        placeholder: "Логин",
        name: "login",
        value: "",
        errorMessage: "Неверный логин",
        extraClass: "field-vertical",
      },
      {
        id: "password",
        labelFor: "password",
        labelText: "Пароль",
        inputType: "password",
        placeholder: "Пароль",
        name: "password",
        value: "",
        errorMessage: "Неверный пароль",
        extraClass: "field-vertical",
      },
    ],
    buttons: [
      {
        id: "submit",
        mode: "primary",
        type: "submit",
        text: "Авторизоваться",
      },
      {
        id: "register",
        mode: "secondary",
        type: "button",
        text: "Нет аккаунта?",
      },
    ],
  }
