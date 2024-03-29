import styled from '@emotion/styled';
import { Button, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { QuizParams } from '../types/quiztype';

import QuizSelectField from '../components/QuizSelectField';
import { useNavigate } from 'react-router-dom';
import { useQuizTimesContext } from '../contexts/QuizTimesContext';

const Home = () => {
  const navigate = useNavigate();

  const {
    actions: { setTimes }
  } = useQuizTimesContext();
  const [quizTypes, setquizTypes] = useState<QuizParams>({
    amount: 10,
    difficulty: 'any',
    category: 'any',
    type: 'any'
  });

  const handleChage = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setquizTypes({
      ...quizTypes,
      [e.target.name]: e.target.value
    });
  };

  const onClick = () => {
    const { difficulty, category, type } = quizTypes;
    setTimes((prev) => ({ ...prev, startTime: new Date() }));
    navigate('/question', {
      state: {
        ...quizTypes,
        difficulty: difficulty === 'any' ? null : difficulty,
        category: category === 'any' ? null : category,
        type: type === 'any' ? null : type
      }
    });
  };

  return (
    <Wrapper>
      <h2>문제를 풀 퀴즈를 골라주세요!</h2>
      <div className="field">
        <label htmlFor="question-count">질문 수</label>
        <TextField
          value={quizTypes.amount}
          className="data-input"
          onChange={handleChage}
          id="question-count"
          variant="outlined"
          name="amount"
          type="number"
        />
      </div>
      <QuizSelectField
        value={quizTypes.category}
        type="category"
        name="category"
        id="category"
        onChange={handleChage}
        label="카테고리"
      />
      <QuizSelectField
        value={quizTypes.difficulty}
        type="difficulty"
        name="difficulty"
        id="difficulty"
        onChange={handleChage}
        label="난이도"
      />
      <QuizSelectField
        value={quizTypes.type}
        type="type"
        name="type"
        id="type"
        onChange={handleChage}
        label="문제 유형"
      />

      <Button variant="contained" onClick={onClick}>
        문제 풀기
      </Button>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 500px;
  background: var(--bg);
  border-radius: 4px;
  margin-top: 100px;
  padding: 30px 60px;
  & .data-input {
    width: 100%;
  }

  & .field {
    margin: 0.5em;
  }

  & button {
    width: 100%;
    height: 40px;
    margin-top: 0.5em;
    background: linear-gradient(to left, var(--purple-30), var(--purple-50));
  }

  & h2 {
    text-align: center;
  }
`;
