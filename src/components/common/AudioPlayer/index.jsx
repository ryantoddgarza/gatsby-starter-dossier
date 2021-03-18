import React from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({ src }) => {
  return (
    <audio controls src={src}>
      Your browser does not support the
      <code>audio</code>
      element.
    </audio>
  );
};

export default AudioPlayer;
