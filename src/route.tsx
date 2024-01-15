import App from './App';
import History from './pages/History';
import Question from './pages/Question';
import Result from './pages/Result';
import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'question', element: <Question /> },
      { path: 'result', element: <Result /> },
      { path: 'history', element: <History /> }
    ]
  }
]);
