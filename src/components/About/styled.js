import styled from 'styled-components';
import { breakpoint, spacing, scale } from '~/design-system';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 ${spacing[4]};

  article {
    max-width: 1000px;
    margin: auto;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  p {
    margin: ${spacing[4]} 0;
  }
`;

export const Title = styled.h2`
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

export const ProfilePhoto = styled.div`
  margin: 0 0 ${spacing[8]};

  img {
    display: block;
    margin: auto;
    width: 320px;
    height: 320px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
  }
`;
