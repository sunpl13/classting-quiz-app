import { useQuestionContext } from '../contexts/QuestionContext';
import { useQuizTimesContext } from '../contexts/QuizTimesContext';
import { useMyAnswerContext } from '../contexts/MyAnswerContext';

const useCleanUp = () => {
  const {
    actions: { setQuestionList }
  } = useQuestionContext();
  const {
    actions: { setMyAnswer }
  } = useMyAnswerContext();
  const {
    actions: { setTimes }
  } = useQuizTimesContext();

  const onReset = () => {
    setMyAnswer([]);
    setTimes({
      startTime: null,
      endTime: null
    });
    setQuestionList([]);
  };
  return { onReset };
};

export default useCleanUp;
