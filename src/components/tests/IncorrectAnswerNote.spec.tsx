import { screen } from '@testing-library/react';
import React from 'react';
import render from '../../utils/test/render';
import IncorrectAnswerNote from '../IncorrectAnswerNote';

describe('IncorrectAnswerNote 컴포넌트', () => {
  it('IncorrectAnswerNote 컴포넌트가 잘 렌더링 되어야 한다.', async () => {
    await render(<IncorrectAnswerNote />);
    const title = screen.getByRole('heading', { level: 2, name: '오답 노트' });
    const button = screen.getByRole('button', { name: '기록' });
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('초기에는 작성된 오답노트가 보여져야 한다.', async () => {
    await render(<IncorrectAnswerNote />);

    const notes = screen.getByTestId('p-tag');

    expect(notes).toBeInTheDocument();
  });

  it('초기에는 작성할 수 있는 textarea가 보여져서는 안된다.', async () => {
    await render(<IncorrectAnswerNote />);

    const textArea = screen.queryByPlaceholderText('오답노트를 작성해주세요.');

    expect(textArea).toBeNull();
  });

  it('"기록"버튼을 누르면 오답노트를 작성할 수 있는 TextArea가 노출된다.', async () => {
    const { user } = await render(<IncorrectAnswerNote />);

    const button = screen.getByRole('button', { name: '기록' });
    await user.click(button);

    const textArea = screen.getByPlaceholderText('오답노트를 작성해주세요.');
    expect(textArea).toBeInTheDocument();
  });

  it('"기록"버튼을 누르면 버튼 명은 "수정"으로 변경된다.', async () => {
    const { user } = await render(<IncorrectAnswerNote />);

    const button = screen.getByRole('button', { name: '기록' });
    await user.click(button);

    const saveButton = screen.getByRole('button', { name: '수정' });
    expect(saveButton).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '기록' })).toBeNull();
  });

  it('"수정"버튼을 누르면 TextArea가 사라진다.', async () => {
    const { user } = await render(<IncorrectAnswerNote />);

    const button = screen.getByRole('button', { name: '기록' });
    await user.click(button);

    const saveButton = screen.getByRole('button', { name: '수정' });
    await user.click(saveButton);

    const textArea = screen.queryByPlaceholderText('오답노트를 작성해주세요.');
    expect(textArea).toBeNull();
  });

  it('TextArea에 오답노트를 작성 후 "수정"버튼을 누르면 오답노트가 정상적으로 반영된다.', async () => {
    const { user } = await render(<IncorrectAnswerNote />);

    const button = screen.getByRole('button', { name: '기록' });
    await user.click(button);

    const textArea = screen.queryByPlaceholderText('오답노트를 작성해주세요.');
    await user.type(textArea, 'test');

    const saveButton = screen.getByRole('button', { name: '수정' });
    await user.click(saveButton);

    const text = screen.getByText('test');
    expect(text).toBeInTheDocument();
  });
});
