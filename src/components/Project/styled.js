import styled from 'styled-components';
import { breakpoint, spacing } from '~/design-system';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 ${spacing[4]};
  overflow: hidden;

  h4 {
    font-size: 1.25rem;
    margin: ${spacing[4]} 0;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 0 -${spacing[6]} ${spacing[10]};
`;

export const ContentCol = styled.div`
  flex: 0 0 100%;
  width: 100%;
  padding: 0 ${spacing[6]};

  ${breakpoint.from('tablet')} {
    flex: 0 0 50%;
    width: 50%;
  }
`;

export const ProjectInfoList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 20rem;

  dt,
  dd {
    margin: ${spacing[2]} 0;
  }
`;

export const BannerImage = styled.figure``;
