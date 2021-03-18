import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Projects from '~/components/Projects';

const ProjectsTemplate = ({ data }) => <Projects data={data} />;

export default ProjectsTemplate;

ProjectsTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`{
  allProjects: allProjectsJson(sort: {fields: [date], order: DESC}) {
    edges {
      node {
        title
        date
        category
        banner {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
`;
