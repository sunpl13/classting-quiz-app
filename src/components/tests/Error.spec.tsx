import { screen } from '@testing-library/react';
import React from 'react';
import render from '../../utils/test/render';
import Error from '../Error';

const navigateFn = vi.fn();
vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');

  return { ...original, useNavigate: () => navigateFn };
});

describe('Error 컴포넌트', () => {
  it('Error 컴포넌트가 잘 렌더링 되어야 한다.', async () => {
    await render(<Error />);

    const text = screen.getByText(/에러 발생!/i);
    const button = screen.getByRole('button', { name: '되돌아가기' });
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("'되돌아가기' 버튼을 클릭한 경우 '/'경로로 navigate 함수가 호출된다.", async () => {
    const { user } = await render(<Error />);

    const button = screen.getByRole('button', { name: '되돌아가기' });
    await user.click(button);
    expect(navigateFn).toHaveBeenNthCalledWith(1, '/', { replace: true });
  });
});
