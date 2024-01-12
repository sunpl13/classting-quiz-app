import App from './App';
import QuestionHistory from './pages/QuestionHistory';
import QuizWrapper from './pages/QuizWrapper';
import Result from './pages/Result';
import SelectQuizType from './pages/SelectQuizType';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <SelectQuizType /> },
      { path: 'question', element: <QuizWrapper /> },
      { path: '/result', element: <Result /> },
      { path: 'history', element: <QuestionHistory /> }
    ]
  }
]);
