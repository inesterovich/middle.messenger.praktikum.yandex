


import AvatarTemplate from './Avatar.hbs?raw';

import Block, { BlockProps } from "../../framework/Block";
import { Img } from "../Img";


interface AvatarProps extends BlockProps {
   
}


class Avatar extends Block {
     
   declare protected props: AvatarProps;
    constructor(props: AvatarProps) {
        super(props)
    }

    public render(): string {

        // !TODO: доделать компонент аватара - сделать его более функциональным, с разной версткой
        return AvatarTemplate

       

    }


 }

export default Avatar;





