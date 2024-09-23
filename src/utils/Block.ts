import { EventBus } from "./EventBus";




type EVENTS = {
    INIT: "init";
    FLOW_CDM: "flow:component-did-mount";
    FLOW_CDU: "flow:component-did-update";
    FLOW_RENDER: "flow:render";
}

export interface BlockProps {
    [key: string]: unknown
}


export class Block<P extends  BlockProps> {
    static EVENTS: EVENTS = {
        INIT: 'init',
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    }
  protected  _element:HTMLElement|null = null;

  protected  _meta: {
        tagName: string,
        props?: P
    }| null = null;

    props: P;

    eventBus: () => EventBus;

    constructor (tagName = 'div', props: P ) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        }

           this.props = this._makeProxyProps(props)
        
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus); // а что если  this.eventBus?
        eventBus.emit(Block.EVENTS.INIT);
        
    }

   protected  _makeProxyProps(props: P) {
        // Как избавиться от self ?
        const self = this;

        const proxyProps = new Proxy(props, {
            get(target, prop) {

                if (typeof prop === 'string') {

                    if (prop[0] === '_') {
                        throw new Error('Нет доступа');
                    }
                    
                    const value = target[prop];
                    return typeof value === 'function' ? value.bind(this) : value

                } else {
                    throw new Error('property can not be a symbol yet');
                     // Непонятно, что делать с symbol
                }
               
            },
            set(target: BlockProps, prop, newValue) {
                if (typeof prop === 'string') {
                    if (prop[0] === '_') {
                        throw new Error('Нет доступа');
                    }

                    target[prop] = newValue;

                    self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);

                    return true;

                } else {
                    throw new Error('property can not be a symbol yet')
                 }
            },
            deleteProperty() {
                throw new Error('Нет доступа')
            },
        })

        return proxyProps
    }

    protected _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));

        //
    }

   protected _createResources() {

        if (this._meta !== null) {
            const { tagName } = this._meta;
            this._element = this._createDocumentElement(tagName);
        }
      
      }

    protected _componentDidMount() {
        this.componentDidMount();
        // Как именно переопределяется метод пользователя. Мы же его вызываем всегда без пропсов
     }
    public componentDidMount(oldProps?: P) {

    }

   public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
      }

    protected _componentDidUpdate(oldProps: P, newProps: P) {
        const response = this.componentDidUpdate(oldProps, newProps);

        if (!response) {
            return;
          }
          this._render();
    }

    public componentDidUpdate(oldProps: P, newProps: P): boolean {
        return true;
    }

    public setProps = (nextProps: P) => {
        if (!nextProps) {
            return
        }

        Object.assign(this.props, nextProps);
    }

    get element() {
        return this._element;
    }

    getContent() {
        return this.element;
      }
    
   protected _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
      }
      

    public init() {
        this._createResources();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    

    protected _render() {
        
  // Этот небезопасный метод для упрощения логики
  // Используйте шаблонизатор из npm или напишите свой безопасный
  // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        
        if (this._element !== null) {
            const block = this.render();
            this._element.innerHTML = block;
        }

    }

  public  render() {
        return ''
    }
}









/*

1. Компонент блока - доработать с учетом событий. В нём нет метода render
2. Переписать проект на компоненты
3. Паттерн MVC
4. Stylelint, eslint
5. Написать fetch и класс для работы с запросами

*/

