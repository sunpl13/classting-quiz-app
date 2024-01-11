import { createContext, useContext, ReactNode, useState, useMemo } from 'react';
interface IProps {
  children: ReactNode;
}

interface ICorrect {
  questionNumber: number;
  awnser: string;
}

interface IIncorrect {
  questionNumber: number;
  awnser: string;
  myAnswer: string;
}

type MyAnswer = {
  correct: ICorrect[];
  inCorrect: IIncorrect[];
};

type MyAnswerContextValue = {
  myAnswer: MyAnswer;
  actions: {
    setMyAnswer: (myAnswer: MyAnswer) => void;
  };
};

const MyAnswerContext = createContext<MyAnswerContextValue>({
  myAnswer: {
    correct: [],
    inCorrect: []
  },
  actions: {
    setMyAnswer: () => {}
  }
});

export const MyAnswerContextProvider = ({ children }: IProps) => {
  const [myAnswer, setMyAnswer] = useState<MyAnswer>({
    correct: [],
    inCorrect: []
  });

  const actions = useMemo(
    () => ({
      myAnswer,
      setMyAnswer: (myAnswer: MyAnswer) => {
        return setMyAnswer({ ...myAnswer });
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
