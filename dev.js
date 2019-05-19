import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import DateTimePicker from './src';

const Main = styled.main`
  box-sizing: border-box;
  display: grid;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Main>
      <DateTimePicker />
    </Main>
  );
}

const target = document.getElementById('dev-app');

render(<App />, target);
