import styled from 'styled-components';

export const WEEK_DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const WeekDays = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0;
  margin: 0;
  padding: 0;
  font-size: 0.8em;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.6;
`;

export const WeekDay = styled.li`
  list-style: none;
  display: grid;
  align-items: center;
  margin: 0;
  padding: 0;
`;
