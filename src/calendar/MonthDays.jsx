import styled from 'styled-components';

export const MonthDays = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  font-size: 1.2em;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;

export const MonthDay = styled.li`
  list-style: none;
  display: grid;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 60px;
  border-radius: 50%;
  transition: all 0.25s ease;
  visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
  font-weight: ${props => (props.isToday ? 'bold' : 'inherit')}
  background-color: ${props => (props.isToday ? '#3a9ad9' : 'inherit')};
  color: ${props => (props.isToday ? '#fff' : 'inherit')};
  opacity: ${props => (props.isValid ? 1 : 0.3)}

  :hover {
    cursor: ${props => (props.isValid ? 'pointer' : 'inherit')};
    color: ${props => {
      const { isValid, isToday } = props;

      if (isValid) {
        return '#3a9ad9';
      }

      if (isToday) {
        return '#fff';
      }

      return 'inherit';
    }};
    background-color: ${props => {
      const { isValid, isToday } = props;

      if (isValid) {
        return '#f0f0f0';
      }

      if (isToday) {
        return '#3a9ad9';
      }

      return 'inherit';
    }};
  }
`;
