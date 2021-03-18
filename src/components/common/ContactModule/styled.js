import styled from 'styled-components';
import { breakpoints, breakpoint, color, spacing } from '~/design-system';

export const Wrapper = styled.div`
  background-color: ${color.ui03};
  color: ${color.text03};
`;

export const Inner = styled.div`
  padding: ${spacing[8]} ${spacing[4]};

  ${breakpoint.from('desktop')} {
    display: flex;

    & > * {
      flex: 1 0 auto;
    }
  }
`;

export const FormContainer = styled.div`
  max-width: ${breakpoints.tablet}px;
  margin: 0 0 0 auto;
`;
