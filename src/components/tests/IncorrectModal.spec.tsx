import { screen } from '@testing-library/react';
import render from '../../utils/test/render';
import IncorrectModal from '../modals/IncorrectModal';

describe('IncorrectModal 컴포넌트', () => {
  it('IncorrectModal 컴포넌트가 잘 렌더링 되어야 한다.', async () => {
    const SubminFn = vi.fn();
    await render(
      <IncorrectModal
        onSubmit={SubminFn}
        myAnswer="correcT"
        correctAnswer="correct"
      />
    );

    const text = screen.getByText(/틀렸습니다/i);
    const myAnswer = screen.getByText(/내가 선택한 정답/i);
    const button = screen.getByRole('button', { name: '닫기' });
    const correctTitle = screen.getByText('정답:');
    expect(text).toBeInTheDocument();
    expect(myAnswer).toBeInTheDocument();
    expect(correctTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('IncorrectModal props로 주어진 값이 잘 렌더링 되어야 한다.', async () => {
    const SubminFn = vi.fn();
    await render(
      <IncorrectModal
        onSubmit={SubminFn}
        myAnswer="correcT"
        correctAnswer="correct"
      />
    );

    const myAnswer = screen.getByText('correcT');
    const correctAnswer = screen.getByText('correct');
    expect(myAnswer).toBeInTheDocument();
    expect(correctAnswer).toBeInTheDocument();
  });

  it('IncorrectModal 버튼에 Pros로 주어진 함수가 잘 호출 되어야 한다.', async () => {
    const SubminFn = vi.fn();
    const { user } = await render(
      <IncorrectModal
        myAnswer="correcT"
        correctAnswer="correct"
        onSubmit={SubminFn}
      />
    );

    const button = screen.getByRole('button', { name: '닫기' });
    await user.click(button);
    expect(SubminFn).toHaveBeenCalled();
  });
});
