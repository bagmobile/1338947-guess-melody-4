import React from "react";
import renderer from "react-test-renderer";

import AudioPlayer from "./audio-player.jsx";


it(`AudioPlayer is rendered correctly`, () => {

  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={() => {}}
    src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg"
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
