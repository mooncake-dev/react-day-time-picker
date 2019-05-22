import React, { useState } from 'react';
import dateFns from 'date-fns';

import { PopupWrapper, Popup, PopupHeader, PopupClose } from './Popup';
import { ConfirmButton } from './Confirm';

import Calendar from './calendar';
import TimeSlots from './time-slots';

function DayTimePicker() {
  const [pickedDay, setPickedDay] = useState(null);
  const [pickedTime, setPickedTime] = useState(null);
  const [showPickTime, setShowPickTime] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePickDay = day => {
    setPickedDay(day);
    setShowPickTime(true);
  };

  const handlePickTime = time => {
    setPickedTime(time);
    setShowPickTime(false);
    setShowConfirm(true);
  };

  const handleClosePickTime = () => {
    setShowPickTime(false);
  };

  const handleConfirm = () => {
    console.log('confirm: ', pickedTime); // eslint-disable-line no-console
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
    setShowPickTime(true);
  };

  return (
    <PopupWrapper>
      <Calendar pickDay={handlePickDay} />

      {showPickTime && (
        <Popup>
          <PopupHeader>
            <p>
              <b>{dateFns.format(pickedDay, 'dddd, MMMM Do YYYY')}</b>
            </p>

            <p>
              <PopupClose onClick={handleClosePickTime}>Go Back</PopupClose>
            </p>
          </PopupHeader>

          <TimeSlots pickedDay={pickedDay} pickTime={handlePickTime} />
        </Popup>
      )}

      {showConfirm && (
        <Popup>
          <PopupHeader>
            <p>
              <b>{dateFns.format(pickedTime, 'dddd, MMMM Do YYYY')}</b>
            </p>

            <p>
              <b>{dateFns.format(pickedTime, 'HH:mm')}</b>
            </p>

            <p>
              <PopupClose onClick={handleCloseConfirm}>Cancel</PopupClose>
            </p>
          </PopupHeader>

          <ConfirmButton onClick={handleConfirm}>Schedule</ConfirmButton>
        </Popup>
      )}
    </PopupWrapper>
  );
}

export default DayTimePicker;
