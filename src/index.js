import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import genreQuestion from './mocks/genre-question.js';
import artistQuestion from './mocks/artist-question.js';

const questions = [genreQuestion, artistQuestion];

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
