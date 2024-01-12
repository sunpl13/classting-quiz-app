import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const IncorrectAnswerNote = () => {
  const [incorrectAnswerText, setIncorrectAnswerText] = useState('');
  const [isTextAreaActive, setIsTextAreaActive] = useState(false);

  const onClick = () => {
    setIsTextAreaActive((prev) => !prev);
  };

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIncorrectAnswerText(e.target.value);
  };
  return (
    <Containter>
      <h2>오답 노트</h2>
      {!isTextAreaActive ? (
        <p>{incorrectAnswerText}</p>
      ) : (
        <textarea
          placeholder="오답노트를 작성해주세요."
          value={incorrectAnswerText}
          onChange={onTextAreaChange}
        />
      )}

      <Button className="write-btn" onClick={onClick}>
        기록
      </Button>
    </Containter>
  );
};

export default IncorrectAnswerNote;

const Containter = styled.div`
  position: relative;
  padding: 30px 10px;

  & h2 {
    border-bottom: 1px solid var(--foreground);
    padding: 5px 0;
  }

  & .write-btn {
    position: absolute;
    padding: 0;
    right: 20px;
    top: 45px;
    margin-top: 0;
  }

  & p,
  textarea {
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    border: 1px solid var(--foreground);
    border-radius: 4px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
