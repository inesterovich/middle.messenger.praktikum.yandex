

export interface BlockSettings {
    withInternalID?: boolean;
}

export interface BlockProps {
   
    events?: ListenerEvents;
    settings?: BlockSettings;
    [key: string]: unknown;
   
}

export type BlockType = {
    _id?: string;
    events?: ListenerEvents;
    settings?: BlockSettings;
    [key: string]: unknown;
}


export interface BlockConfig {
    props: {
        _id?: string;
        events?: ListenerEvents;
        settings?: BlockSettings;
        [key: string]: unknown;
    }
   
   
}


export type ListenerEvents = Partial<Record<keyof HTMLElementEventMap, (e: Event) => any>>



export interface ButtonProps extends BlockProps  {
    id: string;
    mode: 'primary' | 'secondary' | 'danger';
    type: 'button' | 'submit';
    text: string;
    
}
