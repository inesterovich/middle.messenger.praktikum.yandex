import ErrorMessageTemplate from './ErrorMessage.hbs?raw';

import Block, { BlockProps } from '../../framework/Block';

interface ErrorMessageProps extends BlockProps {
  errorMessage: string;
}

class ErrorMessage extends Block {
  protected declare props: ErrorMessageProps;

  constructor(props: ErrorMessageProps) {
    super(props);
  }

  public render(): string {
    // !TODO: доделать компонент аватара - сделать его более функциональным, с разной версткой
    return ErrorMessageTemplate;
  }
}

export default ErrorMessage;
