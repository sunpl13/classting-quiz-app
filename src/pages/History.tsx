import Accrodion from '../components/Accrodion';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../contexts/QuestionContext';
import { useMyAnswerContext } from '../contexts/MyAnswerContext';
import useCleanUp from '../hooks/useCleanUp';

const History = () => {
  const { questionList } = useQuestionContext();
  const { myAnswer } = useMyAnswerContext();

  const { onReset } = useCleanUp();
  const navigate = useNavigate();
  const getMyAnswer = (questionNumber: number) => {
    return myAnswer.find((item) => item.questionNumber === questionNumber);
  };

  const onClick = () => {
    navigate('/', { replace: true });

    //clean up
    onReset();
  };

  return (
    <Container>
      <h2 className="title">문제 기록</h2>

      <div>
        {questionList.map((item, index) => (
          <Accrodion
            key={item.question}
            id={item.question}
            content={{
              question: item.question,
              myAnswer: getMyAnswer(index + 1)?.myAnswer as string,
              correctAnswer: item.correct_answer,
              questionNumber: index + 1
            }}
            title={`${index + 1}번 문항`}
          />
        ))}
      </div>

      <div className="flex-wrapp">
        <Button variant="outlined" onClick={onClick}>
          다시하기
        </Button>
      </div>
    </Container>
  );
};

export default History;

const Container = styled.div`
  width: 800px;
  background: var(--bg);
  padding: 20px;

  & .title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 22px;
    color: var(--primary);
  }

  & .flex-wrapp {
    display: flex;
    margin-top: 15px;
    justify-content: flex-end;
  }
`;
