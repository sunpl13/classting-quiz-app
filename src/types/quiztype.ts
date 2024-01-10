type Difficulty = 'any' | 'easy' | 'medium' | 'hard';
type QuizTypeSelect = 'any' | 'multiple' | 'boolean';
type Category = string;

export type QuizParams = {
  amount: number;
  category: Category;
  difficulty: Difficulty;
  type: QuizTypeSelect;
};

export type TriviaQuizResponse = {
  type: QuizTypeSelect;
  difficulty: Difficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
