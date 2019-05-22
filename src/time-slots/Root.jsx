import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

import generateTimeSlots from './generate-time-slots';

import { List, ListItem } from './List';

function Root({ pickedDay, pickTime }) {
  // TODO: pass slotSizeMinutes as prop
  const slotSizeMinutes = 15;

  const timeSlots = generateTimeSlots(pickedDay, slotSizeMinutes);

  // TODO: pass validator as prop
  // const validator = slotTime => {
  //   const validTimes = [
  //     new Date('Tue May 21 2019 14:15:00 GMT+0200').getTime(),
  //     new Date('Tue May 21 2019 15:15:00 GMT+0200').getTime()
  //   ];
  //   const isValid = validTimes.includes(slotTime.getTime());
  //   return isValid;
  // };
  const validator = null;

  return (
    <List>
      {timeSlots.map(slot => {
        const isValid = validator ? validator(slot) : true;
        return (
          <ListItem
            key={slot}
            isValid={isValid}
            onClick={() => isValid && pickTime(slot)}
          >
            {dateFns.format(slot, 'HH:mm')}
          </ListItem>
        );
      })}
    </List>
  );
}

Root.propTypes = {
  pickedDay: PropTypes.instanceOf(Date),
  pickTime: PropTypes.func.isRequired
};

export default Root;
