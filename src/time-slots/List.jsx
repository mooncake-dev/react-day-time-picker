import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1em;
  height: 390px;
  overflow: auto;
  border-top: 1px solid #f0f0f0;
`;

export const ListItem = styled.li`
  padding: 1em;
  border: 1px solid;
  margin: 1em 0;
  opacity: ${props => (props.isValid ? 1 : 0.3)}

  :hover {
    cursor: ${props => (props.isValid ? 'pointer' : 'inherit')};
    color: ${props => (props.isValid ? '#3a9ad9' : 'inherit')};
  }
`;
