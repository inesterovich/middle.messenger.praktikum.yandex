

export interface BlockSettings {
    withInternalID?: boolean;
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




