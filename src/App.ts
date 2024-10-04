import * as Pages from './pages';
import { FieldProps } from './components/Field/Field';





export interface IPageConfig {
  fields: FieldProps[],
  buttons: any[]
}


export class App {

  state: string;

  private appElement: HTMLElement | null;

 
  constructor() {
    this.state = 'auth';
    this.appElement = document.getElementById('app')!;

  }

  changePage(page: string) {
   
    this.state = page;
      
    this.render();
  }



  render() {
      
       

    switch (this.state) {
      case 'auth':
            
        const authPage = new Pages.AuthPage({ footerClick: this.changePage.bind(this) });
        if (this.appElement) {
          this.appElement.replaceChildren(authPage.getContent());

            
        }

        return '';
      case 'register':
            
        const registerPage = new Pages.RegisterPage({ footerClick: this.changePage.bind(this) });

        if (this.appElement) {
          this.appElement.replaceChildren(registerPage.getContent());
        }
    
        return '';
      case 'profile':
        const profilePage = new Pages.ProfilePage({ footerClick: this.changePage.bind(this) });
        if (this.appElement) {
          this.appElement.replaceChildren(profilePage.getContent());

        }

        return '';
        
      case 'chats':
        const chatsPage = new Pages.ChatsPage({ footerClick: this.changePage.bind(this) });

        if (this.appElement) {
          this.appElement.replaceChildren(chatsPage.getContent());
      
        }
        return '';
      case 'editProfile':
        return '';
      case 'serverError':
            
        const serverErrorPage = new Pages.ServerErrorPage({ footerClick: this.changePage.bind(this) });
        if (this.appElement) {
          this.appElement.replaceChildren(serverErrorPage.getContent());

        }
       
        return '';
      case 'notFound':
        const notFoundPage = new Pages.NotFoundPage({ footerClick: this.changePage.bind(this) });
        if (this.appElement) {
          this.appElement.replaceChildren(notFoundPage.getContent());
    
        }
      
        return '';
      default:
        return '';
    }

   


  }
}


/* 
//1. Написать новый App, вернуть в main
//2. Отренедрить страница
//2.0.1. Переименовать типы
//2.1. Вернуть все компоненты в AuthPage
//3. Переписать футер на компоненты
//4. Сделать примитивный роутинг
//5. Написать остальные страницы
6. Сделать страницу с лентой и списком чатов
//5. Сбор данных из формы
//7. Валидация формы - как обновлять компонент
//8. Реализация fetch. Написать класс по работе с запросами
*/
