import { ReactNode, createContext, useMemo, useState } from 'react';
interface IProps {
  children: ReactNode;
}

export const ModalsDispatchContext = createContext({
  open: () => {},
  close: () => {}
});
export const ModalsStateContext = createContext([]);

const ModalProvider = ({ children }: IProps) => {
  const [openModals, setOpenModals] = useState([]);

  const open = (Component: ReactNode, props: unknown) => {
    setOpenModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: ReactNode) => {
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
