import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

import { PopupWrapper, Popup, PopupHeader, PopupClose } from './Popup';
import { ConfirmButton } from './Confirm';
import { DayIcon, ClockIcon } from './Icons';

import Calendar from './calendar';
import TimeSlots from './time-slots';

function DayTimePicker({
  dayValidator,
  timeValidator,
  timeSlotSizeMinutes,
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
              <DayIcon /> {dateFns.format(pickedDay, 'dddd, MMMM Do, YYYY')}
            </p>

            <p>
              <PopupClose onClick={handleClosePickTime}>Go Back</PopupClose>
            </p>
          </PopupHeader>

          <TimeSlots
            pickedDay={pickedDay}
            slotSizeMinutes={timeSlotSizeMinutes}
            validator={timeValidator}
            pickTime={handlePickTime}
          />
        </Popup>
      )}

      {showConfirm && (
        <Popup>
          <PopupHeader>
            <p>
              <DayIcon /> {dateFns.format(pickedTime, 'dddd, MMMM Do, YYYY')}
            </p>

            <p>
              <ClockIcon /> {dateFns.format(pickedTime, 'HH:mm')}
            </p>

            {!isDone && (
              <p>
                <PopupClose onClick={handleCloseConfirm}>Go Back</PopupClose>
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

          {err && <p>Error: {err}</p>}
        </Popup>
      )}
    </PopupWrapper>
  );
}

DayTimePicker.propTypes = {
  dayValidator: PropTypes.func,
  timeValidator: PropTypes.func,
  timeSlotSizeMinutes: PropTypes.number.isRequired,
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
