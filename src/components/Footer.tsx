import { ChatMessageInput } from './ChatMessageInput';

type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void;
};

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="m-auto max-w-4xl">
        <ChatMessageInput disabled={disabled} onSend={onSendMessage} />
        <div className="cursor-default pt-3 text-center text-xs text-gray-300">
          Feito por Luan Júnior - Veja o meu LinkedIn:&nbsp;
          <a
            className="cursor-pointer underline"
            target="_blank"
            href="https://www.linkedin.com/in/luan-junior-silva-b3476812b/"
            rel="noreferrer"
          >
            Acesse aqui!
          </a>
        </div>
        <div className="cursor-default pt-1 text-center text-xs text-gray-300">
          Validade da minha chave API = 01/07/2023 (após esta data o projeto
          pode parar de funcionar)
        </div>
      </div>
    </footer>
  );
};
