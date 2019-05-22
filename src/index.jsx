import React, { useState } from 'react';
import dateFns from 'date-fns';

import { PopupWrapper, Popup, PopupHeader, PopupClose } from './Popup';

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
    setShowConfirm(true);
  };

  const handleClosePickTime = () => {
    setShowPickTime(false);
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
            <p>You picked: </p>

            <p>
              <b>{dateFns.format(pickedDay, 'dddd, MMMM Do YYYY')}</b>
            </p>

            <p>
              Pick a time below or{' '}
              <PopupClose onClick={handleClosePickTime}>Go Back</PopupClose>
            </p>
          </PopupHeader>

          <TimeSlots pickedDay={pickedDay} pickTime={handlePickTime} />
        </Popup>
      )}

      {showConfirm && (
        <Popup>
          <PopupHeader>
            <p>You&apos;re about to schedule for:</p>

            <p>
              <b>{dateFns.format(pickedTime, 'dddd, MMMM Do YYYY')}</b> at{' '}
              <b>{dateFns.format(pickedTime, 'HH:mm')}</b>
            </p>

            <p>
              Confirm below or{' '}
              <PopupClose onClick={handleCloseConfirm}>Cancel</PopupClose>
            </p>
          </PopupHeader>

          <p>CONFIRM</p>
        </Popup>
      )}
    </PopupWrapper>
  );
}

export default DayTimePicker;
