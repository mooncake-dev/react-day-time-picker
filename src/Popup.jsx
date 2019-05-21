import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dateFns from 'date-fns';

const Container = styled.div`
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

const Header = styled.header`
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 4px 3px -4px #00000018;
  padding: 0 0 1em 0;
`;

const ButtonLink = styled.a`
  color: #3a9ad9;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

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

function _renderTimeSlots(selectedDate, slotSizeMinutes) {
  const isToday = dateFns.isToday(selectedDate);

  let start = selectedDate;
  if (isToday) {
    const now = new Date();
    const offsetHours = dateFns.getHours(now);

    // "Pad" the start time with the amount of hours of the current time, to
    // prevent rendering time slots of the past
    start = dateFns.addHours(start, offsetHours);

    // The start positions might still be in the past in terms of minutes
    // So "pad" the start time with the slot size, to prevent rendering time
    // slots of the past
    while (start <= now) {
      start = dateFns.addMinutes(start, slotSizeMinutes);
    }
  }

  const end = dateFns.addDays(selectedDate, 1);

  let slot = start;
  let timeSlots = [];
  while (slot < end) {
    timeSlots.push(slot);
    slot = dateFns.addMinutes(slot, slotSizeMinutes);
  }

  return timeSlots;
}

export const PopupWrapper = styled.div`
  position: relative;
`;

export function Popup({ handleClose, selectedDate }) {
  // TODO: pass slotSizeMinutes as prop
  const slotSizeMinutes = 15;

  const timeSlots = _renderTimeSlots(selectedDate, slotSizeMinutes);

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
    <Container>
      <Header>
        <p>{dateFns.format(selectedDate, 'dddd, MMMM Do YYYY')}</p>

        <ButtonLink onClick={handleClose}>Go Back</ButtonLink>
      </Header>

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
    </Container>
  );
}

Popup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date)
};
