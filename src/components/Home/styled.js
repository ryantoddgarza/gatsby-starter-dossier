import styled from 'styled-components';
import { Link } from 'gatsby';
import { color, scale, spacing } from '~/design-system';

export const Container = styled.div`
  position: relative;
  padding: 0 ${spacing[4]};
`;

export const BtnLink = styled(Link)`
  font-size: ${scale[8]};
  font-weight: 300;
  display: block;
  padding: ${spacing[4]};
  margin: ${spacing[4]} 0;
  background: ${color.ui03};

  &:hover {
    background: ${color.hoverUI};
  }
`;
