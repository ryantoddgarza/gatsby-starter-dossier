import styled from 'styled-components';
import { spacing } from '~/design-system';

export const PostsWrapper = styled.div`
  padding: 0 ${spacing[4]};
`;

export const PostCard = styled.article`
  padding: ${spacing[4]} 0;
  margin: ${spacing[4]} 0;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 ${spacing[4]};
  }
`;
