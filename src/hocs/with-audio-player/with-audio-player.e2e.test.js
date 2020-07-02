import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAudioPlayer from "./with-audio-player.js";

Enzyme.configure({
  adapter: new Adapter(),
});

function MockComponent() {
  return <div />;
}

describe(`withAudioPlayer e2e Component`, ()=> {

  it(`withAudioPlayer render props renderPlayer`, () => {
    const WrappedMockComponent = withAudioPlayer(MockComponent);
    const wrapper = mount(
        <WrappedMockComponent/>
    );
    const component = wrapper.find(MockComponent).renderProp(`renderPlayer`)(`src#0`, 0);

    expect(component.find(`[src="src#0"]`).prop(`src`)).toEqual(`src#0`);
    expect(component.find(`[src="src#0"]`).prop(`isPlaying`)).toEqual(true);
  });
});
