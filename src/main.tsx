import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/reset';
import { RouterProvider } from 'react-router-dom';
import { router } from './route.tsx';
import ModalProvider from './contexts/ModalContext.tsx';
import Modals from './components/modals/Modals.tsx';
import { QuestionContextProvider } from './contexts/QuestionContext.tsx';
import { MyAnswerContextProvider } from './contexts/MyAnswerContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalProvider>
      <QuestionContextProvider>
        <MyAnswerContextProvider>
          <RouterProvider router={router} />
          <Modals />
        </MyAnswerContextProvider>
      </QuestionContextProvider>
    </ModalProvider>
  </React.StrictMode>
);
