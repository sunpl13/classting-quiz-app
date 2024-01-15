import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AppContainer>
        <h1>Quiz App</h1>
        <Outlet />
      </AppContainer>
    </ErrorBoundary>
  );
}

export default App;

const AppContainer = styled.main`
  & h1 {
    text-align: center;
    color: var(--bg-accent);
  }
`;
