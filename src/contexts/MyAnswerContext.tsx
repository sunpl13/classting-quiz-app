import { createContext, useContext, ReactNode, useState, useMemo } from 'react';
interface IProps {
  children: ReactNode;
}

interface IAnswer {
  questionNumber: number;
  answer: string;
  myAnswer: string;
}

type MyAnswerContextValue = {
  myAnswer: IAnswer[];
  actions: {
    setMyAnswer: (myAnswer: IAnswer[]) => void;
  };
};

const MyAnswerContext = createContext<MyAnswerContextValue>({
  myAnswer: [],
  actions: {
    setMyAnswer: () => {}
  }
});

export const MyAnswerContextProvider = ({ children }: IProps) => {
  const [myAnswer, setMyAnswer] = useState<IAnswer[]>([]);

  const actions = useMemo(
    () => ({
      myAnswer,
      setMyAnswer: (myAnswer: IAnswer[]) => {
        return setMyAnswer([...myAnswer]);
      }
    }),
    [myAnswer]
  );
  return (
    <MyAnswerContext.Provider value={{ myAnswer, actions }}>
      {children}
    </MyAnswerContext.Provider>
  );
};

export const useMyAnswerContext = () => useContext(MyAnswerContext);
