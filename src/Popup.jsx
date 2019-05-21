import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: relative;
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
  background-color: #fff;
  font-size: 1.1em;
`;

export const PopupHeader = styled.header`
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 4px 3px -4px #00000018;
  padding: 0 0 1em 0;
`;

export const PopupClose = styled.a`
  color: #3a9ad9;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;