import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`AudioPlayer e2e Component`, ()=> {

  it(`PlayButton click to play and click to pause`, () => {
    const onPlayButtonClickMock = jest.fn();
    const defaultPlaying = false;

    const pauseStub = jest
        .spyOn(window.HTMLMediaElement.prototype, `pause`)
        .mockImplementation(() => {});

    const audioPlayer = mount(
        <AudioPlayer
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg"
          isPlaying={defaultPlaying}
          onPlayButtonClick={onPlayButtonClickMock}
        />
    );

    expect(audioPlayer.state(`isPlaying`)).toEqual(defaultPlaying);
    audioPlayer.setState({isLoading: false});

    const playButton = audioPlayer.find(`.track__button`);

    playButton.simulate(`click`);
    expect(audioPlayer.state(`isPlaying`)).toEqual(!defaultPlaying);
    expect(pauseStub).toHaveBeenCalled();

    playButton.simulate(`click`);
    expect(audioPlayer.state(`isPlaying`)).toEqual(defaultPlaying);

    expect(onPlayButtonClickMock.mock.calls.length).toBe(2);
  });

});
