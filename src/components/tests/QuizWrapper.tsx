import { setupServer } from 'msw/node';
import render from '../../utils/test/render';
import QuizWrapper from '../../pages/QuizWrapper';
import { screen, waitFor } from '@testing-library/react';
import { handlers } from '../../__mocks__/handlers';

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const navigateFn = vi.fn();
vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
    useLocation: () => ({
      state: {
        amount: 10,
        category: 'any',
        difficulty: 'any',
        type: 'any'
      }
    })
  };
});

describe('QuizWrapper 컴포넌트 (데이터가 성공으로 들어올 시)', () => {
  it('데이터가 로딩 중이라면 스켈레톤 UI가 보여져야 한다.', async () => {
    await render(<QuizWrapper />);

    expect(screen.queryByTestId('loading')).toBeInTheDocument();
  });

  it('데이터가 성공적으로 들어온다면 들어온 데이터 값이 잘 보여야 한다.', async () => {
    await render(<QuizWrapper />);

    expect(screen.queryByTestId('loading')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    );
    expect(
      screen.getByText('Who composed the soundtrack for the game VVVVVV?')
    ).toBeInTheDocument();
  });
});
