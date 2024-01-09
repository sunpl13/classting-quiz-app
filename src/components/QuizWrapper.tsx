import React from 'react';
import { useLocation } from 'react-router-dom';
import useGetQuiz from '../hooks/useGetQuiz';
import Quiz from './Quiz';

const QuizWrapper = () => {
  const location = useLocation();
  const quizInfo = { ...location.state };
  const { isLoading, data } = useGetQuiz(quizInfo);
  console.log(data, isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.code === 'error') {
    return <div>error!</div>;
  }

  return <Quiz questions={data.data.results} />;
};

export default QuizWrapper;
