/* eslint-disable prettier/prettier */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Navigation from './Routes';

const GlobalStyle = createGlobalStyle`
  html, 
  body {
    margin: 0;
    padding: 0;
  }
  html,
  body,
  body > div:first-child,
  div#__next {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    color: white
  }
`;

const App = () => (
    <>
        <GlobalStyle />
        <Navigation />
    </>
);

export default App;
