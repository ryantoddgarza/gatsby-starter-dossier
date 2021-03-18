import React from 'react';
import PropTypes from 'prop-types';
import DynamicPageModule from '~/components/common/DynamicPageModule';
import { Title } from './styled';

const SectionHeading = ({ title }) => (
  <DynamicPageModule>
    <Title>{title}</Title>
  </DynamicPageModule>
);

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeading;
