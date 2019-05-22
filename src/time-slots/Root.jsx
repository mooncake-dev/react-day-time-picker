import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

import generateTimeSlots from './generate-time-slots';

import { List, ListItem } from './List';

function Root({ pickedDay, slotSizeMinutes, validator, pickTime }) {
  const timeSlots = generateTimeSlots(pickedDay, slotSizeMinutes);

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
  slotSizeMinutes: PropTypes.number.isRequired,
  validator: PropTypes.func,
  pickTime: PropTypes.func.isRequired
};

export default Root;
