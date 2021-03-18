import styled from 'styled-components';
import { breakpoints, spacing } from '~/design-system';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 ${spacing[4]};
`;

export const FormContainer = styled.div`
  max-width: ${breakpoints.tablet}px;
  margin: 0 auto;
`;
