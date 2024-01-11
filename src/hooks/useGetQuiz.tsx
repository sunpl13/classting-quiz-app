import { useEffect, useState } from 'react';
import { QuizResponse, getQuiz } from '../api/quiz';
import { QuizParams } from '../types/quiztype';
import { SuccessResponse, ErrorResponse } from '../api/requestHandler';
import { useQuestionContext } from '../contexts/QuestionContext';
const useGetQuiz = (params: QuizParams) => {
  const [data, setData] = useState<
    SuccessResponse<QuizResponse> | ErrorResponse<Error> | null
  >(null);
  const {
    actions: { setQuestionList }
  } = useQuestionContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getQuiz(params);
      setIsLoading(false);
      setData(data);
      if (data.code === 'success') {
        setQuestionList(data.data.results);
      }
    };

    getData();
  }, []);

  return { data, isLoading };
};

export default useGetQuiz;
