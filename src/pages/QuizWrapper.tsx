import { useLocation } from 'react-router-dom';
import useGetQuiz from '../hooks/useGetQuiz';
import Quiz from '../components/Quiz';
import LoadingSkeleton from '../components/skeletons/LoadingSkeleton';
import Error from '../components/Error';

const QuizWrapper = () => {
  const location = useLocation();
  const quizInfo = { ...location.state };
  const { isLoading, data } = useGetQuiz(quizInfo);

  if (isLoading || data === null) {
    return <LoadingSkeleton />;
  }

  if (data.code === 'error') {
    return <Error />;
  }
  return <Quiz questions={data.data.results} />;
};

export default QuizWrapper;
