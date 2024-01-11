import { createContext, useContext, ReactNode, useState, useMemo } from 'react';
import { TriviaQuizResponse } from '../types/quiztype';
interface IProps {
  children: ReactNode;
}

type QuestionLists = {
  questionList: TriviaQuizResponse[];
  actions: {
    setQuestionList: (questionList: TriviaQuizResponse[]) => void;
  };
};

const QuestionContext = createContext<QuestionLists>({
  questionList: [],
  actions: {
    setQuestionList: () => {}
  }
});

export const QuestionContextProvider = ({ children }: IProps) => {
  const [questionList, setQuestionList] = useState<TriviaQuizResponse[]>([]);

  const actions = useMemo(
    () => ({
      questionList: questionList,
      setQuestionList: (questionList: TriviaQuizResponse[]) => {
        return setQuestionList([...questionList]);
      }
    }),
    [questionList]
  );
  return (
    <QuestionContext.Provider value={{ questionList, actions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
