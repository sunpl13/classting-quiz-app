import App from './App';
import QuizWrapper from './components/QuizWrapper';
import SelectQuizType from './components/SelectQuizType';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <SelectQuizType /> },
      { path: 'question', element: <QuizWrapper /> }
    ]
  }
]);
