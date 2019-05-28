import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 420px;
  margin: auto;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: ${props => props.theme.background};
  font-size: 1.1em;
`;

export const PopupHeader = styled.header`
  padding: 1em 0;
`;

export const PopupClose = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 1em;
  color: ${props => props.theme.primary};
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
    color: ${props => props.theme.buttons.disabled.color};
  }
`;
