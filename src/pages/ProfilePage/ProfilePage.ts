


import ProfilePageTemplate from './ProfilePage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Footer } from '../../components/Footer';
import Form from '../../components/Form/Form';
import { Field } from '../../components/Field';
import { FieldProps } from '../../components/Field/Field';
import { Button } from '../../components/Button/';
import { ButtonPropsWithChildren } from '../../components/Button/Button';
import { Img } from '../../components/Img';
import { Avatar } from '../../components/Avatar';





interface ProfilePageProps extends BlockProps {
  footerClick: (page: string) => void
}

interface ProfilePagePropsWithChildren extends ProfilePageProps {
  Avatar: Avatar;
  ProfileForm: Form;
  Footer: Footer;
  GoBackButton: Button;
}


class ProfilePage extends Block {
     
  declare protected props: ProfilePageProps;

  constructor(props: ProfilePageProps) {


    const fieldsProps: FieldProps[] = [
      {
        id: 'email',
   
        labelText: 'Почта',
        inputType: 'text',
        placeholder: 'Почта',
        name: 'email',
        value: '',
        errorMessage: 'Неверный email',
        extraClass: 'field-gorizontal',
        isError: false,
      },
      {
        id: 'login',
             
        labelText: 'Логин',
        inputType: 'text',
        placeholder: 'Логин',
        name: 'login',
        value: '',
        errorMessage: 'Неверный логин',
        extraClass: 'field-gorizontal',
        isError: false,
      },
      {
        id: 'first_name',
             
        labelText: 'Имя',
        inputType: 'text',
        placeholder: 'Имя',
        name: 'first_name',
        value: '',
        errorMessage: 'Введите имя',
        extraClass: 'field-gorizontal',
        isError: false,
      },
      {
        id: 'second_name',
       
        labelText: 'Фамилия',
        inputType: 'text',
        placeholder: 'Фамилия',
        name: 'second_name',
        value: '',
        errorMessage: 'Введите фамилию',
        extraClass: 'field-gorizontal',
        isError: false,
      },
      {
        id: 'display_name',
       
        labelText: 'Имя в чате',
        inputType: 'text',
        placeholder: 'Имя в чате',
        name: 'display_name',
        value: '',
        errorMessage: 'Введите логин чата',
        extraClass: 'field-gorizontal',
        isError: false,
      },
      {
        id: 'phone',
        labelText: 'Телефон',
        inputType: 'text',
        placeholder: 'Телефон',
        name: 'phone',
        value: '',
        errorMessage: 'Введите телефон',
        extraClass: 'field-gorizontal',
        isError: false,
      },
    ];
        
    const buttonsProps: ButtonPropsWithChildren[] =  [
      {
        id: 'editData',
        mode: 'secondary',
        type: 'button',
        text: 'Изменить данные',
      },
      {
        id: 'editPassword',
        mode: 'secondary',
        type: 'button',
        text: 'Изменить пароль',
      },
      {
        id: 'logout',
        mode: 'danger',
        type: 'button',
        text: 'Выйти',
      },
    ];
     

    const preparedPropsWidthChildren: ProfilePagePropsWithChildren = {
      ...props,
      Avatar: new Avatar({}),
      GoBackButton: new Button({
        mode: 'round',
        type: 'button',
        text: '',
        Image: new Img({
          src: '/Arrow.svg',
          altText: 'goBack image',
        }),
      }),
      ProfileForm: new Form({
        FieldItems:  fieldsProps.map((childProps) => new Field(childProps)),
        ButtonItems:  buttonsProps.map((childProps) => new Button(childProps)),
        formTitle: '',
        additionalClass: 'form-profile',
      }),
      Footer: new Footer({ footerClick: props.footerClick }),
    };
    super(preparedPropsWidthChildren);

       

  }

  public render(): string {


    return ProfilePageTemplate;

       

  }


}

export default ProfilePage;





