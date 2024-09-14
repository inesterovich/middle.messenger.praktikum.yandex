import Handlebars from "handlebars";
import * as Pages from "./pages";

import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { ErrorMessage } from "./components/ErrorMessage";
import { Field } from "./components/Field";
import { Form } from "./components/Form";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Link } from "./components/Link";
import { Avatar } from "./components/Avatar";

Handlebars.registerPartial("Label", Label);
Handlebars.registerPartial("Input", Input);
Handlebars.registerPartial("ErrorMessage", ErrorMessage);
Handlebars.registerPartial("Field", Field);
Handlebars.registerPartial("Avatar", Avatar);
Handlebars.registerPartial("Form", Form);
Handlebars.registerPartial("Button", Button);
Handlebars.registerPartial("Link", Link);
Handlebars.registerPartial("Footer", Footer);

export class App {
  constructor() {
    this.state = "auth";
    this.appElement = document.getElementById("app");
    this.pagesContent = {
      authPage: {
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
      },
      registerPage: {
        fields: [
          {
            id: "email",
            labelFor: "email",
            labelText: "Почта",
            inputType: "text",
            placeholder: "Почта",
            name: "email",
            value: "",
            errorMessage: "Неверный email",
            extraClass: "field-vertical",
          },
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
            id: "first_name",
            labelFor: "first_name",
            labelText: "Имя",
            inputType: "text",
            placeholder: "Имя",
            name: "first_name",
            value: "",
            errorMessage: "Введите имя",
            extraClass: "field-vertical",
          },
          {
            id: "second_name",
            labelFor: "second_name",
            labelText: "Фамилия",
            inputType: "text",
            placeholder: "Фамилия",
            name: "second_name",
            value: "",
            errorMessage: "Введите фамилию",
            extraClass: "field-vertical",
          },
          {
            id: "phone",
            labelFor: "phone",
            labelText: "Телефон",
            inputType: "text",
            placeholder: "Телефон",
            name: "phone",
            value: "",
            errorMessage: "Введите телефон",
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
            id: "register",
            mode: "primary",
            type: "submit",
            text: "Зарегистрироваться",
          },
          {
            id: "login",
            mode: "secondary",
            type: "button",
            text: "Войти",
          },
        ],
      },
      profilePage: {
        fields: [
          {
            id: "email",
            labelFor: "email",
            labelText: "Почта",
            inputType: "text",
            placeholder: "Почта",
            name: "email",
            value: "",
            errorMessage: "Неверный email",
            extraClass: "field-gorizontal",
          },
          {
            id: "login",
            labelFor: "login",
            labelText: "Логин",
            inputType: "text",
            placeholder: "Логин",
            name: "login",
            value: "",
            errorMessage: "Неверный логин",
            extraClass: "field-gorizontal",
          },
          {
            id: "first_name",
            labelFor: "first_name",
            labelText: "Имя",
            inputType: "text",
            placeholder: "Имя",
            name: "first_name",
            value: "",
            errorMessage: "Введите имя",
            extraClass: "field-gorizontal",
          },
          {
            id: "second_name",
            labelFor: "second_name",
            labelText: "Фамилия",
            inputType: "text",
            placeholder: "Фамилия",
            name: "second_name",
            value: "",
            errorMessage: "Введите фамилию",
            extraClass: "field-gorizontal",
          },
          {
            id: "display_name",
            labelFor: "display_name",
            labelText: "Имя в чате",
            inputType: "text",
            placeholder: "Имя в чате",
            name: "display_name",
            value: "",
            errorMessage: "Введите логин чата",
            extraClass: "field-gorizontal",
          },
          {
            id: "phone",
            labelFor: "phone",
            labelText: "Телефон",
            inputType: "text",
            placeholder: "Телефон",
            name: "phone",
            value: "",
            errorMessage: "Введите телефон",
            extraClass: "field-gorizontal",
          },
        ],
        buttons: [
          {
            id: "editData",
            mode: "secondary",
            type: "button",
            text: "Изменить данные",
          },
          {
            id: "editPassword",
            mode: "secondary",
            type: "button",
            text: "Изменить пароль",
          },
          {
            id: "logout",
            mode: "danger",
            type: "button",
            text: "Выйти",
          },
        ],
      },
    };
  }

  changePage(page) {
    this.state = page;
    this.render();
  }

  attachListeners() {
    const footerLinks = document.querySelectorAll(".footer-link");
    footerLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage(e.target.dataset.page);
      });
    });
  }

  render() {
    let template;

    switch (this.state) {
      case "auth":
        template = Handlebars.compile(Pages.AuthPage);
        this.appElement.innerHTML = template(this.pagesContent.authPage);
        break;
      case "register":
        template = Handlebars.compile(Pages.RegisterPage);
        this.appElement.innerHTML = template(this.pagesContent.registerPage);
        break;
      case "profile":
        template = Handlebars.compile(Pages.ProfilePage);
        this.appElement.innerHTML = template(this.pagesContent.profilePage);
        break;
      case "editProfile":
        break;
      case "serverError":
        template = Handlebars.compile(Pages.ServerErrorPage);
        this.appElement.innerHTML = template({ statusCode: 500 });
        break;
      case "notFound":
        template = Handlebars.compile(Pages.NotFoundPage);
        this.appElement.innerHTML = template();
        break;
      default:
        break;
    }

    this.attachListeners();

    /* 
        const template = Handlebars.compile(Pages.RegisterPage);

        this.appElement.innerHTML = template({
            fields: this.pagesContent.registerPage
        }) */
  }
}
