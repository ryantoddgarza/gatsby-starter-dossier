import React from 'react';
import PropTypes from 'prop-types';
import { AspectRatio } from './styled';

const VideoEmbed = ({ src, title }) => (
  <AspectRatio>
    <iframe
      title={title}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </AspectRatio>
);

VideoEmbed.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoEmbed;
