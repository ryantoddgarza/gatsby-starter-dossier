import styled from 'styled-components';
import { breakpoint, scale } from '~/design-system';

export const Title = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: ${scale[20]};
  font-weight: 300;
  ${breakpoint.from('tablet')} {
    font-size: ${scale[23]};
  }
  ${breakpoint.from('desktop')} {
    font-size: ${scale[26]};
  }
  ${breakpoint.from('widescreen')} {
    font-size: ${scale[29]};
  }
`;
