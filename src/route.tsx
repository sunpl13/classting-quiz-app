import App from './App';
import QuizWrapper from './components/QuizWrapper';
import Result from './components/Result';
import SelectQuizType from './components/SelectQuizType';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <SelectQuizType /> },
      { path: 'question', element: <QuizWrapper /> },
      { path: '/result', element: <Result /> }
    ]
  }
]);
