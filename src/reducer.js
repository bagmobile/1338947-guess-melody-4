import {extend} from './utils.js';
import {GameType} from './const.js';
import genreQuestion from './mocks/genre-question.js';
import artistQuestion from './mocks/artist-question.js';

const questions = [genreQuestion, artistQuestion];

export const initialState = {
  mistakes: 0,
  maxMistakes: 3,
  step: -1,
  questions,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  ANSWER_QUESTION: `ANSWER_QUESTION`
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistake: () => {
    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    };
  },
  answerQuestion: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }
    return answerIsCorrect
      ? {
        type: ActionType.INCREMENT_STEP,
        payload: 1,
      }
      : {
        type: ActionType.INCREMENT_MISTAKES,
        payload: 1,
      };

  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;

      if (mistakes >= state.maxMistakes) {
        return extend({}, initialState);
      }

      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
