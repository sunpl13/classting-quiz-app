import styled from '@emotion/styled';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ModalLayout = ({ children }: Props) => {
  return (
    <Overlay>
      <ContentLayout>{children}</ContentLayout>
    </Overlay>
  );
};

export default ModalLayout;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const ContentLayout = styled.div`
  width: 700px;
  height: 280px;
  z-index: 150;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;

  & p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  & .answer-conatainer {
    margin-bottom: 10px;

    & span {
      font-size: 20px;
      font-weight: 700;
    }

    & .correct {
      color: var(--primary);
    }
  }

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
  }
`;
