import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`AudioPlayer e2e Component`, () => {

  it(`PlayButton click action`, () => {
    const onPlayButtonClick = jest.fn();

    const audioPlayer = mount(
        <AudioPlayer
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg"
          isLoading={false}
          isPlaying={false}
          onPlayButtonClick={onPlayButtonClick}
        >
          <audio/>
        </AudioPlayer>
    );
    const playButton = audioPlayer.find(`.track__button`);

    playButton.simulate(`click`);

    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  });

});
