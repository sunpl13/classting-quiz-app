import { jsx } from '@emotion/react';
import { ReactNode, createContext, useMemo, useState } from 'react';
interface IProps {
  children: ReactNode;
}

interface IModalDispatch {
  open: (Component: () => jsx.JSX.Element, props: IModalPropTypes) => void;
  close: (Component: () => jsx.JSX.Element) => void;
}

export interface IModalPropTypes {
  onSubmit?: () => void;
  [x: string]: unknown;
}

interface IModals {
  Component: () => jsx.JSX.Element;
  props: IModalPropTypes;
}

export const ModalsDispatchContext = createContext<IModalDispatch>({
  open: () => {},
  close: () => {}
});
export const ModalsStateContext = createContext<IModals[]>([]);

const ModalProvider = ({ children }: IProps) => {
  const [openModals, setOpenModals] = useState<IModals[]>([]);

  const open = (Component: () => jsx.JSX.Element, props: IModalPropTypes) => {
    setOpenModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: () => jsx.JSX.Element) => {
    setOpenModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };
  const dispatch = useMemo(() => ({ open, close }), []);
  return (
    <ModalsStateContext.Provider value={openModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalProvider;
