import styled, { css } from 'styled-components';
import { color, spacing, breakpoint, navbar, zIndex } from '~/design-system';

export const NavbarOuter = styled.div`
  background-color: ${color.ui01};
`;

export const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${navbar.mobile.height};
  padding: 0 ${spacing[4]};
  z-index: ${zIndex.header};
  ${breakpoint.from('desktop')} {
    height: ${navbar.desktop.height};
  }
`;

export const NavbarName = styled.div``;

const hide = css`
  width: 0;
  height: 0;
  opacity: 0;
`;

export const SiteTitle = styled.h1`
  ${({ hidden }) => (hidden ? hide : null)}
`;

export const SiteLogo = styled.img`
  height: calc(${navbar.mobile.height} - ${spacing[4]});
  ${breakpoint.from('desktop')} {
    height: calc(${navbar.desktop.height} - ${spacing[5]});
  }
`;

export const MenuDrawer = styled.div`
  ${breakpoint.to('tablet')} {
    position: fixed;
    top: ${navbar.mobile.height};
    right: ${({ isActive }) =>
      isActive ? '0' : `-${navbar.mobile.drawerWidth}`};
    width: ${navbar.mobile.drawerWidth};
    height: calc(100vh - ${navbar.mobile.height});
    padding: ${spacing[4]};
    background-color: ${color.ui01};
    pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
    transition: right 0.6s;
    z-index: ${zIndex.header};
  }
`;

export const NavList = styled.ul`
  text-align: right;
  ${breakpoint.from('desktop')} {
    display: flex;
  }
`;

export const NavListItem = styled.li`
  padding: ${spacing[5]} 0;

  ${breakpoint.from('desktop')} {
    padding: 0;

    &:not(:last-child) {
      margin: 0 ${spacing[4]} 0 0;
    }
  }

  a:hover {
    color: ${color.hoverPrimary};
  }
`;

export const SocialIconList = styled.ul`
  position: absolute;
  bottom: ${spacing[4]};
  right: ${spacing[4]};
  font-size: 1.375rem;
  ${breakpoint.from('desktop')} {
    display: none;
  }

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

export const Hamburger = styled.div`
  cursor: pointer;
  ${breakpoint.from('desktop')} {
    display: none;
  }
`;
