import styled from 'styled-components';
import { breakpoint, color, navbar, spacing, zIndex } from '~/design-system';

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'links' 'info';
  justify-content: space-between;
  padding: ${spacing[8]} ${spacing[4]};
  font-size: 0.875rem;
  color: ${color.text01};
  background-color: ${color.ui01};
  z-index: ${zIndex.footer};
  ${breakpoint.from('desktop')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'info links';
  }

  a:hover {
    color: ${color.hoverPrimary};
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${spacing[6]};

  ${breakpoint.from('tablet')} {
    flex-direction: row;
  }
`;

export const FooterLinks = styled(FooterSection)`
  grid-area: links;
`;

export const FooterInfo = styled(FooterSection)`
  grid-area: info;
`;

const List = styled.ul`
  flex: 1 1 100%;
  margin: 0 0 ${spacing[4]};
  ${breakpoint.from('desktop')} {
    margin: 0;
  }

  li {
    margin: 0 0 ${spacing[2]} 0;
  }
`;

export const LinkList = styled(List)``;

export const SocialIconList = styled(List)`
  font-size: 1.375rem;

  li {
    display: inline-block;
  }

  li:not(:last-child) {
    margin-right: ${spacing[3]};
  }

  a {
    padding: ${spacing[0]};
  }
`;

export const FooterLogo = styled.img`
  height: 2.375rem;
`;
