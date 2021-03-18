import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CategorizedList from '~/components/CategorizedList';

const CategorizedListTemplate = ({ data, location }) => (
  <CategorizedList data={data} location={location} />
);

CategorizedListTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default CategorizedListTemplate;

export const pageQuery = graphql`query CategorizedListQuery {
  allProjectsJson(filter: {hide: {ne: true}}, sort: {fields: [date], order: DESC}) {
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
