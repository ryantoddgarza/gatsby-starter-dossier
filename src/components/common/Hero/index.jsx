import React from 'react';
import PropTypes from 'prop-types';
import { HeroOuter, HeroInner, Overlay } from './styled';

const Hero = ({ children, image }) => (
  <HeroOuter image={image}>
    <HeroInner>
      <Overlay />
      {children}
    </HeroInner>
  </HeroOuter>
);

Hero.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

Hero.defaultProps = {
  children: null,
  image: '',
};

export default Hero;
