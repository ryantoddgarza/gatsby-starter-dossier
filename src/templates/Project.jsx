import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '~/components/Project';

const ProjectTemplate = ({ data }) => <Project data={data} />;

ProjectTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default ProjectTemplate;

export const pageQuery = graphql`query ProjectQuery($path: String!) {
  project: projectsJson(fields: {slug: {eq: $path}}) {
    title
    date
    category
    banner {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    video
  }
}
`;
