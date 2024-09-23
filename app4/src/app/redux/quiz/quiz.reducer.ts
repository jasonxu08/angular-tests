import { createReducer, on } from "@ngrx/store";
import { INITIAL_QUIZ_STATE } from "./quiz.state";
import { UserActions } from "../actions/user.actions";
import { currentQuestion } from "./quiz.helpers";

export const quizReducer = createReducer(INITIAL_QUIZ_STATE,
    on(UserActions.reset, () => INITIAL_QUIZ_STATE),
    on(UserActions.answerCurrentQuestion, (state, action) => {
        return {
            ...state,
            answers: [...state.answers,{
                userAnswer: action.answerIndex,
                isCorrect: currentQuestion(state).correctAnswer == action.answerIndex
            }]
        }
    }
    )
);
