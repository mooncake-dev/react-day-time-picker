import React, { useState } from 'react';
import dateFns from 'date-fns';

import Container from './Container';
import { PopupWrapper, Popup, PopupHeader, PopupClose } from './Popup';

import Calendar from './calendar';
import TimeSlots from './time-slots';

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showPickTime, setShowPickTime] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSelectedDate = date => {
    setSelectedDate(date);
    setShowPickTime(true);
  };

  const handleSelectTime = time => {
    setSelectedTime(time);
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
    <Container>
      <h3>Pick a Day and Time</h3>

      <PopupWrapper>
        <Calendar selectDate={handleSelectedDate} />

        {showPickTime && (
          <Popup>
            <PopupHeader>
              <p>You picked: </p>

              <p>
                <b>{dateFns.format(selectedDate, 'dddd, MMMM Do YYYY')}</b>
              </p>

              <p>
                Pick a time below or{' '}
                <PopupClose onClick={handleClosePickTime}>Go Back</PopupClose>
              </p>
            </PopupHeader>

            <TimeSlots
              selectedDate={selectedDate}
              selectTime={handleSelectTime}
            />
          </Popup>
        )}

        {showConfirm && (
          <Popup>
            <PopupHeader>
              <p>You&apos;re about to schedule for:</p>

              <p>
                <b>{dateFns.format(selectedDate, 'dddd, MMMM Do YYYY')}</b> at{' '}
                <b>{dateFns.format(selectedTime, 'HH:mm')}</b>
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
    </Container>
  );
}

export default DateTimePicker;
