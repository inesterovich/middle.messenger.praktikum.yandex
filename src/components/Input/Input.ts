import InputTemplate from './Input.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';

interface InputProps extends BlockProps {
  type: 'text' | 'password' | 'email' | 'phone';
  placeholder: string;
  name: string;
  value: string;
}

class Input extends Block {
  protected declare props: InputProps;

  constructor(props: InputProps) {
    super(props);
  }

  public render(): string {
    return InputTemplate;
  }
}

export default Input;
