import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Posts from '~/components/Posts';

const PostsTemplate = ({ data }) => <Posts data={data} />;

export default PostsTemplate;

PostsTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  {
    allPosts: allMarkdownRemark(
      filter: { frontmatter: { hide: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
