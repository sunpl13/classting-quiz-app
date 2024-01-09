import React, { useContext } from 'react';
import {
  ModalsDispatchContext,
  ModalsStateContext
} from '../../contexts/ModalContext';
import CorrectModal from './CorrectModal';
import IncorrectModal from './IncorrectModal';

export const modals = {
  correct: CorrectModal,
  incorrect: IncorrectModal
};

const Modals = () => {
  const openModals = useContext(ModalsStateContext);

  const { close } = useContext(ModalsDispatchContext);

  return openModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      console.log('여기도 실행되어야지');

      close(Component);
    };

    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
      console.log('여기 실행');

      onClose();
    };
    return (
      <Component
        {...restProps}
        key={index}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    );
  });
};

export default Modals;
