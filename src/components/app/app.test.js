import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import questions from '../../mocks/questions.js';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      questions={questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
