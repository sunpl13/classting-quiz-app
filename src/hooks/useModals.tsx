import React, { useContext } from 'react';
import { ModalsDispatchContext } from '../contexts/ModalContext';

const useModals = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (Component: React.ReactNode, props: unknown) => {
    open(Component, props);
  };

  const closeModal = (Component: React.ReactNode) => {
    close(Component);
  };
  return { openModal, closeModal };
};

export default useModals;
