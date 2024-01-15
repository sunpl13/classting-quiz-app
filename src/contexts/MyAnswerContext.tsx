import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction
} from 'react';
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
    setMyAnswer: Dispatch<SetStateAction<IAnswer[]>>;
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
      setMyAnswer
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
