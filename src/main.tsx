import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/reset';
import { RouterProvider } from 'react-router-dom';
import { router } from './route.tsx';
import ModalProvider from './contexts/ModalContext.tsx';
import Modals from './components/modals/Modals.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  //  <React.StrictMode>
  <>
    <GlobalStyle />
    <ModalProvider>
      <RouterProvider router={router} />
      <Modals />
    </ModalProvider>
  </>
  //  </React.StrictMode>
);
