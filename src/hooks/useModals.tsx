import { useContext } from 'react';
import {
  IModalPropTypes,
  ModalsDispatchContext
} from '../contexts/ModalContext';
import { jsx } from '@emotion/react';
const useModals = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (
    Component: () => jsx.JSX.Element,
    props: IModalPropTypes
  ) => {
    open(Component, props);
  };

  const closeModal = (Component: () => jsx.JSX.Element) => {
    close(Component);
  };
  return { openModal, closeModal };
};

export default useModals;
