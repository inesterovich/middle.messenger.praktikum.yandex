

export interface BlockProps {
    events?: ListenerEvents
    [key: string]: unknown;
   
}



export type ListenerEvents = Partial<Record<keyof HTMLElementEventMap, (e: Event) => any>>



export interface ButtonProps extends BlockProps  {
    id: string;
    mode: 'primary' | 'secondary' | 'danger';
    type: 'button' | 'submit';
    text: string;
    
}
