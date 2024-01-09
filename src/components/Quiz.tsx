import React, { useMemo, useState } from 'react';
import { TriviaQuizResponse } from '../types/quiztype';
import styled from '@emotion/styled';
import shuffle from '../utils/shuffle';
import { Button } from '@mui/material';

type Props = {
  questions: TriviaQuizResponse[];
};

const Quiz = ({ questions }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [result, setResult] = useState({
    correctAnswer: 0,
    incorrectAnswer: 0
  });
  const { question, correct_answer, incorrect_answers } =
    questions[currentQuestion];
  const choices = useMemo(
    () => shuffle([correct_answer, ...incorrect_answers]),
    [correct_answer, incorrect_answers]
  );

  const onAnswerClick = (answer: string, index: numer) => {
    setAnswerIdx(index);
    if (answer === correct_answer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            correctAnswer: prev.correctAnswer + 1
          }
        : {
            ...prev,
            incorrectAnswer: prev.incorrectAnswer + 1
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
    }
  };

  return (
    <QuizContainer>
      <ActiveQuestionNumber>{currentQuestion + 1}</ActiveQuestionNumber>
      <TotalQuestionNumber>/{questions.length}</TotalQuestionNumber>
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
      <ul>
        {choices.map((answer, idx) => (
          <li
            onClick={() => onAnswerClick(answer, idx)}
            key={answer}
            className={answerIdx === idx ? 'selected' : undefined}>
            {answer}
          </li>
        ))}
      </ul>
      <ButtonWrapp>
        <Button
          onClick={onClickNext}
          variant="outlined"
          disabled={answerIdx === null}>
          {currentQuestion === questions.length - 1 ? '결과보기' : '다음'}
        </Button>
      </ButtonWrapp>
    </QuizContainer>
  );
};

export default Quiz;

const QuizContainer = styled.div`
  width: 500px;
  background: var(--bg);
  border-radius: 4px;
  margin-top: 100px;
  padding: 30px 60px;

  & h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }

  & ul {
    margin-top: 20px;
    margin-left: -40px;

    li {
      text-decoration: none;
      list-style: none;
      color: var(--foreground);
      background: var(--bg);
      border: 1px solid var(--disabled);
      border-radius: 16px;
      padding: 11px;
      margin-top: 15px;
      cursor: pointer;
    }
  }

  & .selected {
    background: var(--primary);
    border: 1px solid var(--accent);
    color: var(--bg);
  }
`;

const ActiveQuestionNumber = styled.span`
  font-size: 32px;
  font-weight: 500;
  color: var(--primary);
`;
const TotalQuestionNumber = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--disabled);
`;

const ButtonWrapp = styled.div`
  display: flex;
  justify-content: flex-end;

  & button {
    background: linear-gradient(0deg, var(--primary) 0.03%, var(--accent));
    border-radius: 9px;
    font-size: 18px;
    color: var(--bg);
    padding: 10px 42px;
    outline: none;
    border: none;
    margin-top: 15px;
    cursor: pointer;

    &:disabled {
      background: var(--bg-accent);
      color: var(--disabled);
      cursor: not-allowed;
    }
  }
`;
