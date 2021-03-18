import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import { GlobalStyle, Wrapper } from './styled';

const App = ({ children, projectCategories }) => (
  <Wrapper>
    <GlobalStyle />
    <header>
      <Navbar projectCategories={projectCategories} />
    </header>
    <main>{children}</main>
    <footer>
      <Footer projectCategories={projectCategories} />
    </footer>
  </Wrapper>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  projectCategories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
