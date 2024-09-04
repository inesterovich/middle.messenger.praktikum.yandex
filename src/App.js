import Handlebars from 'handlebars';
import * as Pages from './pages';

import { Label } from './components/Label';
import { Input } from './components/Input';
import { ErrorMessage } from './components/ErrorMessage';
import { Field } from './components/Field';

Handlebars.registerPartial('Label', Label);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('ErrorMessage', ErrorMessage);
Handlebars.registerPartial('Field', Field)

export class App {
    constructor() {
        this.state = 'currentPage';
        this.appElement = document.getElementById('app');
    }
    render() {
        const template = Handlebars.compile(Pages.TestPage);

        this.appElement.innerHTML = template({ text: 'Test Page example' })

    }
}

/*

!TODO:
4.1.	Авторизация
4.2.	Регистрация
4.3.	Профиль
4.4.	Страница 404
4.5.	Страница 5**
4.6.	Список чатов – заглушка
4.7.	Лента чатов - заглушка

Компоненты:
Input - сам инпут
Label - заголовок
Error - Строка ошибки
Field - поле формы, включает в себя три предыдущих
Button

*/