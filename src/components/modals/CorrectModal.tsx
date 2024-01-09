import React from 'react';
import ModalLayout from './ModalLayout';

type Props = {
  onSubmit: () => void;
};

const CorrectModal = ({ onSubmit }: Props) => {
  return (
    <ModalLayout>
      <p>정답입니다!😊</p>
      <button onClick={onSubmit}>닫기</button>
    </ModalLayout>
  );
};

export default CorrectModal;
