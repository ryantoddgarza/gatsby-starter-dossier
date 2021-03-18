import styled from 'styled-components';
import MediaOverlay from '~/components/common/MediaOverlay';
import { typeSize, breakpoint, color, spacing } from '~/design-system';

const gutterWidth = '1rem';

export const AspectRatioOuter = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 100%;
  margin: 0 0 ${gutterWidth};
  color: ${color.text03};
  background-color: ${color.ui03};
  overflow: hidden;
  cursor: pointer;
  ${breakpoint.from('tablet')} {
    width: calc(50% - ${gutterWidth});
    padding-top: calc(50% - ${gutterWidth});
    margin: 0 ${gutterWidth} ${gutterWidth} 0;
  }
  ${breakpoint.from('desktop')} {
    width: calc(33.33333% - ${gutterWidth});
    padding-top: calc(33.33333% - ${gutterWidth});
  }
  ${breakpoint.from('widescreen')} {
    width: calc(25% - ${gutterWidth});
    padding-top: calc(25% - ${gutterWidth});
  }

  &:hover {
    background-color: ${color.hoverUI};
    header {
      background-color: ${color.hoverUI};
    }
    figure {
      opacity: 0.1;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  header {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    padding: ${spacing[4]};
    background-color: ${color.ui03};

    time {
      position: absolute;
      left: ${spacing[4]};
      bottom: ${spacing[4]};
    }
  }

  h3 {
    font-size: ${typeSize.heading.lvl3.mobile};
    font-weight: 300;
    margin: 0 0 ${spacing[6]};
    ${breakpoint.from('tablet')} {
      font-size: ${typeSize.heading.lvl3.desktop};
    }
  }
`;

export const AspectRatioInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.figure`
  ${MediaOverlay}
`;
