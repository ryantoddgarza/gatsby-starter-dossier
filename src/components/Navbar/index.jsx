import React, { useEffect, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ScopedLink from '~/components/common/ScopedLink';
import { mainNav, social } from '~/components/common/links';
import { HOME_PATH, title } from '~/constants';
import { breakpoints } from '~/design-system';
import {
  Hamburger,
  MenuDrawer,
  NavList,
  NavListItem,
  NavbarInner,
  NavbarName,
  NavbarOuter,
  SiteLogo,
  SiteTitle,
  SocialIconList,
} from './styled';

// import logo from '~/resources/images/logo.svg';
const logo = undefined;

const TOGGLE_MENU = 'TOGGLE_MENU';
const CLOSE_MENU = 'CLOSE_MENU';
const SET_IS_MOBILE = 'SET_IS_MOBILE';

const isClient = typeof window !== 'undefined';
const windowIsMobile = () =>
  isClient && window.innerWidth < breakpoints.desktop;

const initialState = {
  isMenuOpened: false,
  isMobile: windowIsMobile(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      const isMenuOpened = !state.isMenuOpened;

      return {
        ...state,
        isMenuOpened,
      };
    }
    case CLOSE_MENU: {
      const isMenuOpened = false;

      return {
        ...state,
        isMenuOpened,
      };
    }
    case SET_IS_MOBILE: {
      const isMobile = windowIsMobile();

      return {
        ...state,
        isMobile,
      };
    }
    default:
      return state;
  }
};

const Navbar = ({ projectCategories }) => {
  const [{ isMenuOpened, isMobile }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const toggleMenu = useCallback(() => {
    dispatch({ type: TOGGLE_MENU });
  }, []);
  const closeMenu = useCallback(() => {
    dispatch({ type: CLOSE_MENU });
  }, []);
  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpened]);

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: SET_IS_MOBILE });

      if (!isMobile) {
        dispatch({ type: CLOSE_MENU });
      }
    };

    const debounce = (callback, delay) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
      };
    };

    window.addEventListener('resize', debounce(handleResize, 500));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <NavbarOuter>
        <NavbarInner>
          <NavbarName>
            <Link to={HOME_PATH} onClick={closeMenu}>
              {logo ? (
                <>
                  <SiteLogo src={logo} alt="logo" />
                  <SiteTitle hidden>{title}</SiteTitle>
                </>
              ) : (
                <h1>{title}</h1>
              )}
            </Link>
          </NavbarName>
          <MenuDrawer isActive={isMenuOpened} isMobile={isMobile}>
            <nav>
              <NavList>
                {mainNav.map(({ name, link }) => (
                  <NavListItem key={name}>
                    <ScopedLink
                      to={link}
                      onClick={isMobile ? toggleMenu : null}
                    >
                      {name}
                    </ScopedLink>
                  </NavListItem>
                ))}
              </NavList>
            </nav>
            <SocialIconList>
              {social.map(({ name, link, icon }) => (
                <li key={name}>
                  <ScopedLink to={link}>{icon || name[0]}</ScopedLink>
                </li>
              ))}
            </SocialIconList>
          </MenuDrawer>
          <Hamburger onClick={toggleMenu}>
            {isMenuOpened ? 'close' : 'menu'}
          </Hamburger>
        </NavbarInner>
      </NavbarOuter>
    </>
  );
};

Navbar.propTypes = {
  projectCategories: PropTypes.arrayOf(PropTypes.shape({})),
};

Navbar.defaultProps = {
  projectCategories: {},
};

export default Navbar;
