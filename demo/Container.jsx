import styled from 'styled-components';

const _Container = styled.div`
  width: 475px;
  margin: 1em auto;
  padding: 1em;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Container = styled(_Container)`
  background-color: #fff;
  color: #333;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 4px #00000018;
`;

export const DarkContainer = styled(_Container)`
  background-color: #111;
  color: #fff;
`;
