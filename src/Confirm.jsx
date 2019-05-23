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
  color: ${props => props.theme.buttons.confirm.color};
  background-color: ${props => props.theme.buttons.confirm.background};

  :hover {
    cursor: pointer;
    color: ${props => props.theme.buttons.confirm.hover.color};
    background-color: ${props => props.theme.buttons.confirm.hover.background};
  }

  :disabled {
    cursor: not-allowed;
    color: ${props => props.theme.buttons.disabled.color};
    background-color: ${props => props.theme.buttons.disabled.background};
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
