import { useEffect, useState } from "react";
import { getQuiz } from "../api/quiz";
import { QuizParams } from "../types/quiztype";

const useGetQuiz = (params: QuizParams) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getQuiz(params);
      setIsLoading(false);
      setData(data);
    };

    getData();
  }, []);

  return { data, isLoading };
};

export default useGetQuiz;
