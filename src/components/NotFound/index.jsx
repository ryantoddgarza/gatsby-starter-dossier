import React from 'react';
import Helmet from 'react-helmet';
import { makeDocTitle } from '~/constants';
import { Wrapper } from './styled';

const NotFound = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>{makeDocTitle('Page Not Found')}</title>
        <meta name="og:title" content={makeDocTitle('Page Not Found')} />
      </Helmet>
      Page Not Found
    </Wrapper>
  );
};

export default NotFound;
