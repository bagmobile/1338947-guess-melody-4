import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

const withAudio = (Component) => {

  class WithAudio extends PureComponent {

    constructor(props) {
      super(props);

      this._audioRef = createRef();

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying,
      };
    }

    componentDidMount() {
      const {src} = this.props;
      const audio = this._audioRef.current;

      audio.src = src;
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;
      audio.src = ``;
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;

      if (this.state.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    render() {
      const {isLoading, isPlaying} = this.state;
      const {onPlayButtonClick} = this.props;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayButtonClick={() => {
            this.setState({isPlaying: !isPlaying});
            onPlayButtonClick();
          }}
        >
          <audio
            ref={this._audioRef}
            onCanPlayThrough={() => this.setState({isLoading: false})}
            onPlay={() => this.setState({isPlaying: true})}
            onPause={() => this.setState({isPlaying: false})}
            onTimeUpdate={() => this.setState({progress: this._audioRef.currentTime})}
          />
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
  };

  return WithAudio;
};

export default withAudio;
