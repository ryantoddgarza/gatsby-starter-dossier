import React from 'react';
import PropTypes from 'prop-types';
import { PostsWrapper, PostCard } from './styled';

const Posts = ({ data }) => {
  const allPosts = data.allPosts.edges;

  return (
    <PostsWrapper>
      {allPosts.map(({ node: { excerpt, frontmatter: { title } } }) => (
        <PostCard key={title}>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </PostCard>
      ))}
    </PostsWrapper>
  );
};

export default Posts;

Posts.propTypes = {
  data: PropTypes.shape({
    allPosts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};
