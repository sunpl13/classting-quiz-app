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
  width: 360px;
  height: 180px;
  z-index: 150;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  justify-content: center;
  overflow: auto;
`;
