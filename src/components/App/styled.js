import styled, { createGlobalStyle } from 'styled-components';
import { color } from '~/design-system';
import { reset, global } from '~/styles';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${color.ui01};
  color: ${color.text01};

  main {
    flex: 1 0 auto;
  }
`;
