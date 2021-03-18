import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

const DynamicPageModule = ({ children }) => <Wrapper>{children}</Wrapper>;

DynamicPageModule.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DynamicPageModule;
