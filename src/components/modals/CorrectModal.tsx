import ModalLayout from './ModalLayout';
import { jsx } from '@emotion/react';

type Props = {
  onSubmit: () => void;
};

const CorrectModal = ({ onSubmit }: Props): jsx.JSX.Element => {
  return (
    <ModalLayout>
      <p>정답입니다!😊</p>
      <button onClick={onSubmit}>닫기</button>
    </ModalLayout>
  );
};

export default CorrectModal;
