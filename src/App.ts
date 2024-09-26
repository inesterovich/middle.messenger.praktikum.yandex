import Handlebars from "handlebars";
import * as Pages from "./pages";



type FieldProps = {
    id: string;
    labelFor: string;
    labelText: string;
    inputType: string;
    placeholder: string;
    name: string;
    value: string;
    errorMessage?: string;
    extraClass?: string;
}



interface IPageConfig {
    fields: FieldProps[],
    buttons: any[]
}


export class App {

    state: string;
    private appElement: HTMLElement | null;

    pagesContent: {
        authPage: IPageConfig;
     
    }

  constructor() {
    this.state = "auth";
    this.appElement = document.getElementById("app")!;
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
     
   
    };
  }

  changePage(page: string) {
    this.state = page;
    this.render();
  }



  render() {
   

    switch (this.state) {
        case "auth":
            
            const authPage = new Pages.AuthPage({});
            if (this.appElement) {
                this.appElement.replaceWith(authPage.getContent());
              }

        return '';
      case "register":
    
      return '';
      case "profile":
      
      return '';
      case "editProfile":
        return '';
      case "serverError":
       
      return '';
      case "notFound":
      
      return '';
      default:
        return '';
    }

   


  }
}


/* 
1. Написать новый App, вернуть в main
2. Отренедрить страница
3. Написать остальные страницы
4. Сделать страницу с лентой и списком чатов
5. Сбор данных из формы
6. Валидация формы
7. Реализация fetch
*/
