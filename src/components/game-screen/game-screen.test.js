import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen.jsx";
import {GameType} from "../../const.js";

describe(`GameScreen component render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.ARTIST}
        >
          <div className="children-component" />
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.GENRE}
        >
          <div className="children-component" />
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
