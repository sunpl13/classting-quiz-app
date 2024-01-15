import { screen } from '@testing-library/react';
import render from '../../utils/test/render';
import AccordionContent from '../AccordionContent';

const mockCorrectContentData = {
  question: 'What is the capital of France?',
  myAnswer: 'Paris',
  correctAnswer: 'Paris'
};

const mockIncorrectContentData = {
  ...mockCorrectContentData,
  correctAnswer: 'Seoul'
};

describe('AccordionContent 컴포넌트', () => {
  it('AccordionContent 컴포넌트가 잘 렌더링 되어야 한다.', async () => {
    await render(<AccordionContent {...mockCorrectContentData} />);

    const question = screen.getByText(/문제:/i);
    const myAnswerTitle = screen.getByText(/내가 선택한 정답:/i);
    const isCorrect = screen.getByText(/정답 여부:/i);

    expect(question).toBeInTheDocument();
    expect(myAnswerTitle).toBeInTheDocument();
    expect(isCorrect).toBeInTheDocument();
  });

  it('AccordionContent props로 전달된 값이 잘 렌더링 되어야 한다.', async () => {
    await render(<AccordionContent {...mockCorrectContentData} />);

    const question = screen.getByText('What is the capital of France?');
    const myAnswer = screen.getByText('Paris');

    expect(question).toBeInTheDocument();
    expect(myAnswer).toBeInTheDocument();
  });

  describe('정답일 경우', () => {
    it("정답일 경우 정답 여부가 'O'가 출력되어야 한다.", async () => {
      await render(<AccordionContent {...mockCorrectContentData} />);

      const correct = screen.getByTestId('isCorrect');

      expect(correct.textContent).toBe('O');
    });

    it('정답일 경우 정답 여부(O,X)가 primary 컬러로 출력되어야 한다.', async () => {
      await render(<AccordionContent {...mockCorrectContentData} />);

      const correct = screen.getByTestId('isCorrect');

      expect(correct).toHaveStyle('color: var(--primary);');
    });

    it('정답일 경우 실제 정답 여부가 노출되어서는 안된다.', async () => {
      await render(<AccordionContent {...mockCorrectContentData} />);

      const inCorrectContainer = screen.queryByTestId(
        'correctAnswer-container'
      );
      expect(inCorrectContainer).toBeNull();
    });
  });

  describe('오답일 경우', () => {
    it("오답일 경우 정답 여부가 'X'가 출력되어야 한다.", async () => {
      await render(<AccordionContent {...mockIncorrectContentData} />);

      const correct = screen.getByTestId('isCorrect');

      expect(correct.textContent).toBe('X');
    });

    it('오답일 경우 정답 여부(O,X)가 incorrect 컬러로 출력되어야 한다.', async () => {
      await render(<AccordionContent {...mockIncorrectContentData} />);

      const correct = screen.getByTestId('isCorrect');

      expect(correct).toHaveStyle('color: var(--incorrect);');
    });

    it('오답일 경우 실제 정답란이 노출되어져야 한다.', async () => {
      await render(<AccordionContent {...mockIncorrectContentData} />);

      const inCorrectContainer = screen.getByTestId('correctAnswer-container');
      const correctAnswer = screen.getByText('Seoul');

      expect(inCorrectContainer).toBeInTheDocument();
      expect(correctAnswer).toBeInTheDocument();
    });
  });
});
