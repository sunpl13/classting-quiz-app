import { screen } from '@testing-library/react';
import React from 'react';
import render from '../../utils/test/render';
import Accrodion from '../Accrodion';

const mockCorrectContentData = {
  question: 'What is the capital of France?',
  myAnswer: 'Paris',
  correctAnswer: 'Paris',
  questionNumber: 3
};

describe('Accordion 컴포넌트', () => {
  it('Accordion 컴포넌트가 잘 렌더링 되어야 한다.', async () => {
    await render(
      <Accrodion content={mockCorrectContentData} id={'1'} title="문제 3번" />
    );

    const title = screen.getByText('문제 3번');
    const toggleButton = screen.getByText('▽');
    expect(title).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();
  });

  it('Accordion 초기에는 content 값이 보이지 않아야 한다.', async () => {
    await render(
      <Accrodion content={mockCorrectContentData} id={'1'} title="문제 3번" />
    );

    const question = screen.getByText('What is the capital of France?');
    expect(question.closest('div.accordionContent')).toHaveStyle('opacity: 0;');
  });

  describe('▽ 버튼', () => {
    it('▽ 버튼을 누르게 되면 버튼의 모양이 "△"로 바뀌어야 한다.', async () => {
      const { user } = await render(
        <Accrodion content={mockCorrectContentData} id={'1'} title="문제 3번" />
      );
      const toggleButton = screen.getByText('▽');

      await user.click(toggleButton);
      expect(screen.getByText('△')).toBeInTheDocument();
    });

    it('▽ 버튼을 누르게 되면 accordionContent class가 있는 요소에 "show" class가 추가 되어야 한다.', async () => {
      const { user } = await render(
        <Accrodion content={mockCorrectContentData} id={'1'} title="문제 3번" />
      );
      const toggleButton = screen.getByText('▽');

      await user.click(toggleButton);
      expect(screen.getByTestId('content-container')).toHaveClass('show');
    });

    it('▽ 버튼을 누르게 되면 accordionContent class가 있는 요소에 "show" class가 추가 되어야 한다.', async () => {
      const { user } = await render(
        <Accrodion content={mockCorrectContentData} id={'1'} title="문제 3번" />
      );
      const toggleButton = screen.getByText('▽');

      await user.click(toggleButton);
      expect(screen.getByTestId('content-container')).toHaveClass('show');
    });

    it('▽ 버튼을 누르게 되면 content 값이 보여야 한다.', async () => {
      const { user } = await render(
        <Accrodion content={mockCorrectContentData} id={'1'} title="문제 3번" />
      );
      const toggleButton = screen.getByText('▽');

      await user.click(toggleButton);
      const question = screen.getByText('What is the capital of France?');
      expect(question.closest('div.accordionContent')).toHaveStyle(
        'opacity: 1;'
      );
    });
  });
});
