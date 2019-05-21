import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dateFns from 'date-fns';

import generateTimeSlots from './generate-time-slots';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1em;
  height: 390px;
  overflow: auto;
`;

const ListItem = styled.li`
  padding: 1em;
  border: 1px solid;
  margin: 1em 0;
  opacity: ${props => (props.isValid ? 1 : 0.3)}

  :hover {
    cursor: ${props => (props.isValid ? 'pointer' : 'inherit')};
    color: ${props => (props.isValid ? '#3a9ad9' : 'inherit')};
  }
`;

function Root({ selectedDate }) {
  // TODO: pass slotSizeMinutes as prop
  const slotSizeMinutes = 15;

  const timeSlots = generateTimeSlots(selectedDate, slotSizeMinutes);

  // TODO: pass validator as prop
  const validator = slotTime => {
    const validTimes = [
      new Date('Tue May 21 2019 14:15:00 GMT+0200').getTime(),
      new Date('Tue May 21 2019 15:15:00 GMT+0200').getTime()
    ];
    const isValid = validTimes.includes(slotTime.getTime());
    return isValid;
  };

  return (
    <List>
      {timeSlots.map(slot => {
        const isValid = validator ? validator(slot) : true;
        return (
          <ListItem key={slot} isValid={isValid}>
            {dateFns.format(slot, 'HH:mm')}
          </ListItem>
        );
      })}
    </List>
  );
}

Root.propTypes = {
  selectedDate: PropTypes.instanceOf(Date)
};

export default Root;
