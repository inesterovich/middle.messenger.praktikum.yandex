

export interface BlockProps {
    [key: string]: unknown
}



export interface ButtonProps extends BlockProps  {
    id: string;
    mode: 'primary' | 'secondary' | 'danger';
    type: 'button' | 'submit';
    text: string;
}
