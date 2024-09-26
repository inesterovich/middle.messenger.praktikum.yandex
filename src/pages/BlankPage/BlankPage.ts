


import BlankPageTemplate from './BlankPage.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import Form from '../../components/Form/Form';
import { Field } from '../../components/Field';
import { FieldTextProps } from '../../components/Field/Field';
import { Footer } from '../../components/Footer';




interface BlankPageProps extends BlockProps {

}


class BlankPage extends Block {
     
   declare protected props: BlankPageProps;
    constructor(props: BlankPageProps) {
        debugger;

        super({
            ...props,
        })

       

    }

    public render(): string {


        return BlankPageTemplate

       

    }


 }

export default BlankPage;





