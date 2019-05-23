import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 1em;
  list-style: none;
  margin: 0;
  padding: 1em;
  height: 355px;
  overflow: auto;
  border-top: 1px solid ${props => props.theme.secondary};
`;

export const ListItem = styled.li`
  padding: 0.75em 0.5em;
  border: 1px solid;
  margin: 0;
  opacity: ${props => (props.isValid ? 1 : 0.3)};

  :hover {
    cursor: ${props => (props.isValid ? 'pointer' : 'inherit')};
    color: ${props => (props.isValid ? props.theme.primary : 'inherit')};
  }
`;
