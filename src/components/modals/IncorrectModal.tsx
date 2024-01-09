import React from 'react';
import ModalLayout from './ModalLayout';
type Props = {
  onSubmit: () => void;
  myAnswer: string;
  correctAnswer: string;
};

const IncorrectModal = ({ onSubmit, myAnswer, correctAnswer }: Props) => {
  return (
    <ModalLayout>
      <p>틀렸습니다.. 조금 더 노력 해보세요!😢</p>
      <div>내가 선택한 정답: {myAnswer}</div>
      <div>정답: {correctAnswer}</div>
      <button onClick={onSubmit}>닫기</button>
    </ModalLayout>
  );
};

export default IncorrectModal;
