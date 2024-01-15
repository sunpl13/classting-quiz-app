import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import DoughnutChart from '../components/DoughnutChart';
import { useMyAnswerContext } from '../contexts/MyAnswerContext';
import { useQuizTimesContext } from '../contexts/QuizTimesContext';

const Result = () => {
  const navigate = useNavigate();

  const { myAnswer } = useMyAnswerContext();
  const {
    times: { startTime, endTime }
  } = useQuizTimesContext();
  const totalAnswerCount = myAnswer.length;
  const correctCount = myAnswer.filter(
    (item) => item.myAnswer === item.answer
  ).length;
  const incorrectCount = totalAnswerCount - correctCount;

  const time = (endTime - startTime) / 1000;
  const minute = Math.floor(time / 60);
  const second = time % 60;
  const chartData = {
    labels: ['정답', '오답'],
    datasets: [
      {
        label: '갯수',
        data: [correctCount, incorrectCount] as number[],
        borderWidth: 0,
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)']
      }
    ]
  };
  useEffect(() => {
    removeStartTime();
    removeEndTime();
  }, []);

  const onReset = () => {
    navigate('/', { replace: true });
  };

  const viewHistory = () => {
    navigate('/history');
  };

  return (
    <ResultContainer>
      <div className="layout">
        <div>
          <h2>결과!</h2>
          <p>
            걸린 시간 :{' '}
            <span>
              {minute}분 {second}초
            </span>
          </p>
          <p>
            전체 문항 수 : <span>{totalAnswerCount}</span>
          </p>
          <p>
            맞은 문항 수 : <span>{correctCount}</span>
          </p>
          <p>
            틀린 문항 수 : <span>{incorrectCount}</span>
          </p>
        </div>
        <div className="chart-container">
          <DoughnutChart data={chartData} />
        </div>
      </div>
      <div className="btn-container">
        <Button variant="contained" onClick={onReset}>
          다시하기
        </Button>
        <Button variant="contained" onClick={viewHistory}>
          문제 기록 보기
        </Button>
      </div>
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = styled.div`
  background: var(--bg);
  width: 800px;
  border-radius: 4px;
  margin-top: 100px;
  padding: 30px 60px;
  & h2 {
    font-size: 24px;
    letter-spacing: 1.4px;
    text-align: center;
  }
  & p {
    font-size: 16px;
    font-weight: 500;
  }
  & span {
    color: var(--primary);
    font-size: 22px;
  }

  & .layout {
    display: flex;
    justify-content: space-between;
  }

  & .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 0 10px;
  }

  & .chart-container {
    width: 300px;
  }
`;
