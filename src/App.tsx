import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Home } from './modules/home';

const RedBox = styled(Button)`
  border: 50px solid red !important;
`;

const App = () => (
  <RedBox>
    <Home />
  </RedBox>
);

export default App;
