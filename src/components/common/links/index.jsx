import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
  ABOUT_PATH,
  CONTACT_PATH,
  PROJECTS_PATH,
  POSTS_PATH,
  FACEBOOK_ID,
  INSTAGRAM_ID,
  TWITTER_ID,
} from '~/constants';

export const mainNav = [
  {
    name: 'Projects',
    link: PROJECTS_PATH,
  },
  {
    name: 'Blog',
    link: POSTS_PATH,
  },
  {
    name: 'About',
    link: ABOUT_PATH,
  },
  {
    name: 'Contact',
    link: CONTACT_PATH,
  },
];

export const social = [
  {
    name: 'Facebook',
    link: `https://www.facebook.com/${FACEBOOK_ID}`,
    icon: <FaFacebook />,
  },
  {
    name: 'Instagram',
    link: `https://www.instagram.com/${INSTAGRAM_ID}`,
    icon: <FaInstagram />,
  },
  {
    name: 'Twitter',
    link: `https://www.twitter.com/${TWITTER_ID}`,
    icon: <FaTwitter />,
  },
];
