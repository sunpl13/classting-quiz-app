import { screen } from '@testing-library/react';
import render from '../../utils/test/render';
import CorrectModal from '../modals/CorrectModal';

describe('CorrectModal 컴포넌트', () => {
  it('CorrectModal 컴포넌트가 잘 렌더링 되어야 한다.', async () => {
    const SubminFn = vi.fn();
    await render(<CorrectModal onSubmit={SubminFn} />);

    const text = screen.getByText(/정답입니다!/i);
    const button = screen.getByRole('button', { name: '닫기' });
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('CorrectModal 버튼에 Pros로 주어진 함수가 잘 호출 되어야 한다.', async () => {
    const SubminFn = vi.fn();
    const { user } = await render(<CorrectModal onSubmit={SubminFn} />);

    const button = screen.getByRole('button', { name: '닫기' });
    await user.click(button);
    expect(SubminFn).toHaveBeenCalled();
  });
});
