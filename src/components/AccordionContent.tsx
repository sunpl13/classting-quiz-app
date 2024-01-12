import styled from '@emotion/styled';
import IncorrectAnswerNote from './IncorrectAnswerNote';

type Props = {
  question: string;
  myAnswer: string;
  correctAnswer: string;
};

const AccordionContent = ({ question, myAnswer, correctAnswer }: Props) => {
  const isCorrect = correctAnswer === myAnswer;

  return (
    <ContentLayout>
      <div className="answer-conatainer">
        문제: <span dangerouslySetInnerHTML={{ __html: question }}></span>
      </div>
      <div className="answer-conatainer">
        내가 선택한 정답:{' '}
        <span dangerouslySetInnerHTML={{ __html: myAnswer }}></span>
      </div>
      <div className="answer-conatainer">
        정답 여부:{' '}
        <span className={isCorrect ? 'correct' : 'incorrect'}>
          {isCorrect ? 'O' : 'X'}
        </span>
      </div>

      {!isCorrect && (
        <>
          <div className="answer-conatainer">
            정답:{' '}
            <span
              className="incorrect"
              dangerouslySetInnerHTML={{ __html: correctAnswer }}></span>
          </div>

          <IncorrectAnswerNote />
        </>
      )}
    </ContentLayout>
  );
};

export default AccordionContent;

const ContentLayout = styled.div`
  padding-bottom: 30px;
  width: 100%;
  & p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  & .answer-conatainer {
    margin-bottom: 10px;

    & span {
      font-size: 20px;
      font-weight: 700;
    }

    & .correct {
      color: var(--primary);
    }

    & .incorrect {
      color: var(--incorrect);
    }
  }

  & button {
    background: linear-gradient(0deg, var(--primary) 0.03%, var(--accent));
    border-radius: 9px;
    font-size: 18px;
    color: var(--bg);
    padding: 10px 42px;
    outline: none;
    border: none;
    margin-top: 15px;
    cursor: pointer;
  }
`;
