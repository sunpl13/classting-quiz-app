import { screen } from '@testing-library/react';
import React from 'react';
import render from '../../utils/test/render';
import Quiz from '../Quiz';

const mockQuestions = [
  {
    question: 'What is the capital of France?',
    correct_answer: 'Paris',
    incorrect_answers: ['Berlin', 'Madrid', 'Rome']
  },
  {
    question: 'What is the capital of Korea?',
    correct_answer: 'Seoul',
    incorrect_answers: ['Tokyo', 'Beizing', 'Madirid']
  }
];

const openModalFn = vi.fn();

vi.mock('../../hooks/useModals', async () => {
  const original = await vi.importActual('../../hooks/useModals');
  return { ...original, openModal: () => openModalFn };
});
describe('Quiz 컴포넌트', () => {
  it('퀴즈 컴포넌트가 Pros 값으로 잘 렌더링 되어야 한다.', async () => {
    await render(<Quiz questions={mockQuestions} />);

    expect(
      screen.getByText('What is the capital of France?')
    ).toBeInTheDocument();
  });

  it('문제 보기를 클릭 했을 때 선택한 보기에 "selected" class가 잘 적용되어야 한다.', async () => {
    const { user } = await render(<Quiz questions={mockQuestions} />);

    await user.click(screen.getByText('Paris'));
    expect(screen.getByText('Paris')).toHaveClass('selected');
  });

  it('보기를 선택했을 때 다음 버튼이 활성화 되어야 한다.', async () => {
    const { user } = await render(<Quiz questions={mockQuestions} />);
    const button = screen.getByText('다음');
    expect(button).toHaveAttribute('disabled');
    await user.click(screen.getByText('Paris'));

    expect(button).not.toHaveAttribute('disabled');
  });

  it('마지막 질문일 경우 버튼은 "결과보기"라는 이름이어야 한다.', async () => {
    const mockQuestionsOnlyOneQuestion = [
      {
        question: 'What is the capital of France?',
        correct_answer: 'Paris',
        incorrect_answers: ['Berlin', 'Madrid', 'Rome']
      }
    ];
    await render(<Quiz questions={mockQuestionsOnlyOneQuestion} />);
    const button = screen.getByText('결과보기');
    expect(button).toBeInTheDocument();
  });
});
