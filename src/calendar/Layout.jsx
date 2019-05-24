import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'month-year'
    'days-of-week'
    'days-of-month';
`;

export const MonthYear = styled.header`
  grid-area: month-year;
  margin: 1em 0;
`;

export const DaysOfWeek = styled.section`
  grid-area: days-of-week;
  margin: 1em 0;
`;

export const DaysOfMonth = styled.section`
  grid-area: days-of-month;
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
