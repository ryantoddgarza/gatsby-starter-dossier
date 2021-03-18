import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { AspectRatioOuter, AspectRatioInner, Overlay } from './styled';

const placeholderImage =
  'https://images.unsplash.com/photo-1605543667606-52b0f1ee1b72?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&h=1600&q=80';

const ProjectCard = ({ slug, title, date, banner }) => (
  <AspectRatioOuter>
    <Link to={slug}>
      <AspectRatioInner>
        <img src={placeholderImage} alt="placeholder" />
        <Overlay />
        <header>
          <h3>{title}</h3>
          {date ? <time>{date}</time> : null}
        </header>
      </AspectRatioInner>
    </Link>
  </AspectRatioOuter>
);

ProjectCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  banner: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }),
};

ProjectCard.defaultProps = {
  date: '',
  banner: {},
};

export default ProjectCard;
