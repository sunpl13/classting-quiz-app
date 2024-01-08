import { QuizParams, TriviaQuizResponse } from "./../types/quiztype";
import axios from "axios";
import { requestHandler } from "./requestHandler";

interface QuizResponse {
  response_code: number;
  results: TriviaQuizResponse;
}

export const getQuiz = requestHandler<QuizParams, QuizResponse>((params) => axios.get("https://opentdb.com/api.php", { params }));
