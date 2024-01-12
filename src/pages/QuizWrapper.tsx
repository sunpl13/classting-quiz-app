import { useLocation } from 'react-router-dom';
import useGetQuiz from '../hooks/useGetQuiz';
import Quiz from '../components/Quiz';
import LoadingSkeleton from '../components/skeletons/LoadingSkeleton';
import Error from '../components/Error';

const QuizWrapper = () => {
  const location = useLocation();
  console.log(location.pathname);

  const quizInfo = { ...location.state };
  const { isLoading, data } = useGetQuiz(quizInfo);
  console.log(data, isLoading);

  if (isLoading || data === null) {
    return <LoadingSkeleton />;
  }

  if (data.code === 'error') {
    return <Error />;
  }
  return <Quiz questions={data.data.results} />;
};

export default QuizWrapper;
