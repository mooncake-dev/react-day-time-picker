import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import DayTimePicker from './src';

const Main = styled.main`
  box-sizing: border-box;
  display: grid;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  margin: auto;
  padding: 1em;
  background-color: #fff;
  color: #666;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px #00000018;

  @media (max-width: 460px) {
    width: 100%;
    border-radius: 0;
  }
`;

function App() {
  return (
    <Main>
      <Container>
        <h3>Pick a Day and Time</h3>

        <DayTimePicker />
      </Container>
    </Main>
  );
}

const target = document.getElementById('demo-app');

render(<App />, target);
