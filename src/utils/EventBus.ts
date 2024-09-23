
type CallBackType = (...args: any[]) => void; // Временно выключил

type EventNamesType = 'init' | "flow:component-did-mount" | "flow:component-did-update" | "flow:render";


export class EventBus {
    listeners: Partial<Record<EventNamesType, CallBackType[]>>

    constructor() {

        this.listeners = {
            
        }
    }

    on = (eventName: EventNamesType, callback: CallBackType) => {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        } 

            this.listeners[eventName]?.push(callback);
     
           
      
    }

    off = (eventName: EventNamesType, callback: CallBackType) => {
        if (!this.listeners[eventName]) {
            throw new Error(`Нет события: ${eventName}`);
          }
      
          this.listeners[eventName] = this.listeners[eventName]?.filter(
            listener => listener !== callback
          );
    }


    emit = (eventName: EventNamesType, ...args: unknown[]) => {
        if (!this.listeners[eventName]) {
            throw new Error(`Нет события: ${event}`);
    }

    this.listeners[eventName]?.forEach(listener => {
        listener(...args);
    });
    }
} 
