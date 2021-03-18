import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ScopedLink from '~/components/common/ScopedLink';
import { mainNav, social } from '~/components/common/links';
import { HOME_PATH, title } from '~/constants';
import titleCase from '~/utils/titleCase';
import {
  FooterWrapper,
  FooterLinks,
  FooterLogo,
  FooterInfo,
  LinkList,
  SocialIconList,
} from './styled';

// import logo from '~/resources/images/logo.svg';
const logo = undefined;

const Footer = ({ projectCategories }) => (
  <FooterWrapper>
    <FooterLinks>
      <LinkList>
        {mainNav.map(({ name, link }) => (
          <li key={name}>
            <ScopedLink to={link}>{name}</ScopedLink>
          </li>
        ))}
      </LinkList>
      <LinkList>
        {projectCategories.map(({ key }) =>
          key === '__ALL__' ? null : (
            <li key={key}>
              <ScopedLink to={`/${key}`}>{titleCase(key)}</ScopedLink>
            </li>
          ),
        )}
      </LinkList>
      <SocialIconList>
        {social.map(({ name, link, icon }) => (
          <li key={name}>
            <ScopedLink to={link}>{icon || name[0]}</ScopedLink>
          </li>
        ))}
      </SocialIconList>
    </FooterLinks>
    <FooterInfo>
      <Link to={HOME_PATH}>
        {logo ? <FooterLogo src={logo} alt="logo" /> : <div>{title}</div>}
      </Link>
    </FooterInfo>
    <div>{`© ${new Date().getFullYear()} All rights reserved`}</div>
  </FooterWrapper>
);

Footer.propTypes = {
  projectCategories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Footer;
