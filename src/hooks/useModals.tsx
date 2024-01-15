import { useContext } from 'react';
import {
  IModalPropTypes,
  ModalsDispatchContext
} from '../contexts/ModalContext';
import { jsx } from '@emotion/react';
import { modalComponentPropType } from '../types/modalComponentPropType';
const useModals = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (
    Component: () => jsx.JSX.Element,
    props: IModalPropTypes
  ) => {
    open(Component, props);
  };

  const closeModal = (
    Component: ({
      onClose,
      onSubmit
    }: modalComponentPropType) => jsx.JSX.Element
  ) => {
    close(Component);
  };
  return { openModal, closeModal };
};

export default useModals;
