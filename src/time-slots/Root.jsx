import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

import generateTimeSlots from './generate-time-slots';

import { List, ListItem } from './List';

function Root({ selectedDate, selectTime }) {
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
          <ListItem
            key={slot}
            isValid={isValid}
            onClick={() => isValid && selectTime(slot)}
          >
            {dateFns.format(slot, 'HH:mm')}
          </ListItem>
        );
      })}
    </List>
  );
}

Root.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  selectTime: PropTypes.func.isRequired
};

export default Root;
