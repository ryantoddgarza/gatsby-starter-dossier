import React from 'react';
import Helmet from 'react-helmet';
import { makeDocTitle } from '~/constants';
import { Wrapper } from './styled';

const Success = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>{makeDocTitle('Success')}</title>
        <meta name="og:title" content={makeDocTitle('Page Not Found')} />
      </Helmet>
      Form successfully submitted
    </Wrapper>
  );
};

export default Success;
