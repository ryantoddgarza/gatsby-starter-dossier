import styled, { css } from 'styled-components';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { breakpoint, scale, spacing } from '~/design-system';

const Chevron = css`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  ${breakpoint.from('tablet')} {
    font-size: 1.75rem;
  }
`;

export const ChevronLeft = styled(BsChevronCompactLeft)`
  ${Chevron}
  left: 0;
`;

export const ChevronRight = styled(BsChevronCompactRight)`
  ${Chevron}
  right: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 0 ${spacing[5]};
  overflow: hidden;
`;

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none; // firefox

  // webkit
  &::-webkit-scrollbar {
    display: none;
    // ie fallback
    width: 0px;
    background: transparent;
  }
`;

export const ListItem = styled.li`
  padding: ${spacing[4]};
  font-size: ${scale[14]};
  font-weight: 200;
  white-space: nowrap;
  ${breakpoint.from('tablet')} {
    font-size: ${scale[16]};
  }
  ${breakpoint.from('desktop')} {
    font-size: ${scale[18]};
  }
  ${breakpoint.from('widescreen')} {
    font-size: ${scale[20]};
  }
`;
