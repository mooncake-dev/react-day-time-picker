import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

import { PopupWrapper, Popup, PopupHeader, PopupClose } from './Popup';
import { ConfirmButton } from './Confirm';

import Calendar from './calendar';
import TimeSlots from './time-slots';

function DayTimePicker({
  dayValidator,
  timeValidator,
  isLoading,
  isDone,
  err,
  onConfirm,
  confirmText,
  loadingText,
  doneText
}) {
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
    onConfirm(pickedTime);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
    setShowPickTime(true);
  };

  return (
    <PopupWrapper>
      <Calendar validator={dayValidator} pickDay={handlePickDay} />

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

          <TimeSlots
            pickedDay={pickedDay}
            validator={timeValidator}
            pickTime={handlePickTime}
          />
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

            {!isDone && (
              <p>
                <PopupClose onClick={handleCloseConfirm}>Cancel</PopupClose>
              </p>
            )}
          </PopupHeader>

          {!isDone ? (
            <ConfirmButton disabled={isLoading} onClick={handleConfirm}>
              {isLoading ? loadingText : confirmText}
            </ConfirmButton>
          ) : (
            <p>{doneText}</p>
          )}

          {err && (
            <div>
              <p>Error: {err}</p>
            </div>
          )}
        </Popup>
      )}
    </PopupWrapper>
  );
}

DayTimePicker.propTypes = {
  dayValidator: PropTypes.func,
  timeValidator: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  err: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string,
  loadingText: PropTypes.string,
  doneText: PropTypes.string
};

DayTimePicker.defaultProps = {
  confirmText: 'Schedule',
  loadingText: 'Scheduling..',
  doneText: 'Your event has been scheduled!'
};

export default DayTimePicker;
