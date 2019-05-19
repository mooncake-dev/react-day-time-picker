import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  padding: 1em;
  background-color: #fff;
  color: #666;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px #00000018;

  @media (max-width: 700px) {
    width: 100%;
    border-radius: 0;
  }
`;

export default Container;
