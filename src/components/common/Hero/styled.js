import styled from 'styled-components';
import MediaOverlay from '~/components/common/MediaOverlay';
import { breakpoint, color, navbar, spacing } from '~/design-system';

export const HeroOuter = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;

  padding-top: 100%;
  ${breakpoint.from('tablet')} {
    padding-top: 75%;
  }
  ${breakpoint.from('desktop')} {
    padding-top: 56.25%;
  }
  ${breakpoint.from('widescreen')} {
    padding-top: 41.84%;
  }

  max-height: calc(100vh - ${navbar.mobile.height});
  ${breakpoint.from('desktop')} {
    max-height: calc(100vh - ${navbar.desktop.height});
  }

  background-color: ${color.ui03};
  ${({ image }) =>
    image
      ? `
    background-image: url(${image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  `
      : ''}
`;

export const HeroInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${spacing[4]};
`;

export const Overlay = styled.div`
  ${MediaOverlay}
`;
