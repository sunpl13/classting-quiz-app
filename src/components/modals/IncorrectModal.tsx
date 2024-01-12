import ModalLayout from './ModalLayout';
import { jsx } from '@emotion/react';
type Props = {
  onSubmit: () => void;
  myAnswer: string;
  correctAnswer: string;
};

const IncorrectModal = ({
  onSubmit,
  myAnswer,
  correctAnswer
}: Props): jsx.JSX.Element => {
  return (
    <ModalLayout>
      <div>
        <p>틀렸습니다.. 조금 더 노력 해보세요!😢</p>
        <div className="answer-conatainer">
          내가 선택한 정답:{' '}
          <span dangerouslySetInnerHTML={{ __html: myAnswer }}></span>
        </div>
        <div className="answer-conatainer">
          정답:{' '}
          <span
            className="correct"
            dangerouslySetInnerHTML={{ __html: correctAnswer }}></span>
        </div>
      </div>
      <button onClick={onSubmit}>닫기</button>
    </ModalLayout>
  );
};

export default IncorrectModal;
