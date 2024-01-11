import { useContext } from 'react';
import {
  ModalsDispatchContext,
  ModalsStateContext
} from '../../contexts/ModalContext';
import CorrectModal from './CorrectModal';
import IncorrectModal from './IncorrectModal';
import { jsx } from '@emotion/react';

export const modals = {
  correct: CorrectModal as () => jsx.JSX.Element,
  incorrect: IncorrectModal as () => jsx.JSX.Element
};

const Modals = () => {
  const openModals = useContext(ModalsStateContext);

  const { close } = useContext(ModalsDispatchContext);

  return openModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      close(Component);
    };

    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
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
