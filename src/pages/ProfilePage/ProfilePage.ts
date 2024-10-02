


import ProfilePageTemplate from './ProfilePage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';
import { Footer } from '../../components/Footer';
import {Form} from '../../components/Form';
import { Field } from '../../components/Field';
import { FieldProps } from '../../components/Field/Field';
import { Button } from '../../components/Button/';
import { ButtonPropsWithChildren } from '../../components/Button/Button';
import { Avatar } from '../../components/Avatar';
import { FieldNames, fieldNames, validationErrors } from '../../framework/constants';





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

    const formFields: FieldNames[] = ['email', 'login', 'first_name', 'second_name', 'phone', 'password']
      
    const fieldsProps: FieldProps[] = formFields.map((fieldName: FieldNames) => ({
        ...fieldNames[fieldName],
        value: '',
        isError: false, 
        errorMessage: validationErrors[fieldName],
        extraClass: 'field-gorizontal'
    }))
        
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
        Avatar: new Avatar({
                    src: '/Union.svg',
                    altText: 'Avatar default picture'
                }
        ),
      GoBackButton: new Button({
        mode: 'round',
        type: 'button',
        text: '',
        image: {
          src: '/Arrow.svg',
          altText: 'goBack image',
        },
      }),
        ProfileForm: new Form({
            fields: fieldsProps,
            buttons: buttonsProps,
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





