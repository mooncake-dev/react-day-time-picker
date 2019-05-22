import styled from 'styled-components';

export const ConfirmButton = styled.button`
  font-size: 1em;
  font-weight: 500;
  padding: 0.8em 1em;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  outline: 0;
  transition: all 0.25s ease;
  min-width: 150px;
  background-color: #3a9ad9;
  color: #fff;

  :hover {
    cursor: pointer;
    background-color: #3a9ad9;
    color: #fff;
  }

  :disabled {
    cursor: not-allowed;
    background-color: #f0f0f0;
    color: #666;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
