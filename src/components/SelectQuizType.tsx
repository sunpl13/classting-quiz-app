import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { QuizParams } from '../types/quiztype';

import QuizSelectField from './QuizSelectField';
import { useNavigate } from 'react-router-dom';

const SelectQuizType = () => {
  const navigate = useNavigate();
  const [quizTypes, setquizTypes] = useState<QuizParams>({
    amount: 10,
    difficulty: 'any',
    category: 'any',
    type: 'any'
  });

  const handleChage = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setquizTypes({
      ...quizTypes,
      [e.target.name]: e.target.value
    });
  };

  const onClick = () => {
    const { difficulty, category, type } = quizTypes;
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

export default SelectQuizType;

const Wrapper = styled.div`
  border: 1px solid #e2e2e2;
  border-radius 8px;
  padding: 1rem;
  background:var(--bg);
  & .data-input {
    width:100%;
  }

  & .field{
    margin: 0.5em
  }

  & button {
    width: 100%;
    height: 40px;
    margin-top:0.5em;
  }
`;
