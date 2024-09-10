import Handlebars from 'handlebars';
import * as Pages from './pages';

import { Label } from './components/Label';
import { Input } from './components/Input';
import { ErrorMessage } from './components/ErrorMessage';
import { Field } from './components/Field';
import { Form } from './components/Form';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { Link } from './components/Link';

Handlebars.registerPartial('Label', Label);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('ErrorMessage', ErrorMessage);
Handlebars.registerPartial('Field', Field);
Handlebars.registerPartial('Form', Form);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Footer', Footer);

export class App {
    constructor() {
        this.state = 'auth';
        this.appElement = document.getElementById('app');
        this.pagesContent = {
            authPage: [
                {
                id:'login',
                labelFor: 'login',
                labelText: 'Логин',
                inputType: 'text',
                placeholder: 'Логин',
                name: 'login',
                value: '',
                errorMessage: 'Неверный логин'
                },
                {
                    id:'password',
                    labelFor: 'password',
                    labelText: 'Пароль',
                    inputType: 'text',
                    placeholder: 'Пароль',
                    name: 'password',
                    value: '',
                    errorMessage: 'Неверный пароль'
                },
                
            ],
            registerPage: [
                {
                    id:'email',
                    labelFor: 'email',
                    labelText: 'Почта',
                    inputType: 'text',
                    placeholder: 'Почта',
                    name: 'email',
                    value: '',
                    errorMessage: 'Неверный email'
                    },
                {
                id:'login',
                labelFor: 'login',
                labelText: 'Логин',
                inputType: 'text',
                placeholder: 'Логин',
                name: 'login',
                value: '',
                errorMessage: 'Неверный логин'
                },
                {
                    id:'first_name',
                    labelFor: 'first_name',
                    labelText: 'Имя',
                    inputType: 'text',
                    placeholder: 'Имя',
                    name: 'first_name',
                    value: '',
                    errorMessage: 'Введите имя'
                },
                {
                    id:'second_name',
                    labelFor: 'second_name',
                    labelText: 'Фамилия',
                    inputType: 'text',
                    placeholder: 'Фамилия',
                    name: 'second_name',
                    value: '',
                    errorMessage: 'Введите фамилию'
                },
                {
                    id:'phone',
                    labelFor: 'phone',
                    labelText: 'Телефон',
                    inputType: 'text',
                    placeholder: 'Телефон',
                    name: 'phone',
                    value: '',
                    errorMessage: 'Введите телефон'
                    },
                
                {
                    id:'password',
                    labelFor: 'password',
                    labelText: 'Пароль',
                    inputType: 'text',
                    placeholder: 'Пароль',
                    name: 'password',
                    value: '',
                    errorMessage: 'Неверный пароль'
                },
                
            ],
        }
    }

    changePage(page) {
        this.state = page;
        this.render();
      
    }
    
    attachListeners() {
        const footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            this.changePage(e.target.dataset.page);
          });
        });
    }

    render() {

        let template;

        switch (this.state) {
            case 'auth':
                template = Handlebars.compile(Pages.AuthPage);
                this.appElement.innerHTML = template({ fields: this.pagesContent.authPage})
                break;
            case 'register':
                template = Handlebars.compile(Pages.RegisterPage);
                this.appElement.innerHTML = template({fields: this.pagesContent.registerPage})
                break;
            case 'profile':
                break;
            case 'editProfile':
                break;
            case 'serverError':
                template = Handlebars.compile(Pages.ServerErrorPage);
                this.appElement.innerHTML = template({ statusCode: 500})
                break;
            case 'notFound':
                    template = Handlebars.compile(Pages.NotFoundPage);
                    this.appElement.innerHTML = template()
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

/*

!TODO:
4.1.	Авторизация - шаблон
4.2.	Регистрация - шаблон
4.3.	Профиль - 
4.4.	Страница 404 - шаблон
4.5.	Страница 5** - шаблон
4.6.	Список чатов – заглушки нет
4.7.	Лента чатов - заглушки нет
4.8     Стили

Компоненты:
Input - сам инпут
Label - заголовок
Error - Строка ошибки
Field - поле формы, включает в себя три предыдущих
Button

*/