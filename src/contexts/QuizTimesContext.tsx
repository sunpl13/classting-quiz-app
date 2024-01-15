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

interface IQuizTime {
  startTime: Date | null;
  endTime: Date | null;
}

type QuizTimesContextValue = {
  times: IQuizTime;
  actions: {
    setTimes: Dispatch<SetStateAction<IQuizTime>>;
  };
};

const QuizTimesContext = createContext<QuizTimesContextValue>({
  times: {
    startTime: null,
    endTime: null
  },
  actions: {
    setTimes: () => {}
  }
});

export const QuizTimesContextProvider = ({ children }: IProps) => {
  const [times, setTimes] = useState<IQuizTime>({
    startTime: null,
    endTime: null
  });

  const actions = useMemo(
    () => ({
      setTimes
    }),
    [times]
  );
  return (
    <QuizTimesContext.Provider value={{ times, actions }}>
      {children}
    </QuizTimesContext.Provider>
  );
};

export const useQuizTimesContext = () => useContext(QuizTimesContext);
