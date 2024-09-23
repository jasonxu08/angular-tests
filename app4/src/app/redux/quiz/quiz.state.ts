import { All_QUESTIONS } from "src/app/models/all-questions";
import { Answer } from "src/app/models/answer.model";
import { Question } from "src/app/models/question.model";

export const QuizFeatureKey = 'quiz';

export interface QuizState {
    readonly questions: Question[];
    readonly answers: Answer[];
}

export const INITIAL_QUIZ_STATE: QuizState = {
    questions: All_QUESTIONS,
    answers: [] // All_ANSWERS
}