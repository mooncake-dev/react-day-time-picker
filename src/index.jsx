import React, { useState } from 'react';
import dateFns from 'date-fns';

import Container from './Container';
import { PopupWrapper, Popup, PopupHeader, PopupClose } from './Popup';

import Calendar from './calendar';
import TimeSlots from './time-slots';

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => setShowPopup(false);

  return (
    <Container>
      <h3>Pick a Date and Time</h3>

      <PopupWrapper>
        <Calendar
          setSelectedDate={setSelectedDate}
          setShowPopup={setShowPopup}
        />

        {showPopup && (
          <Popup handleClose={closePopup}>
            <PopupHeader>
              <p>{dateFns.format(selectedDate, 'dddd, MMMM Do YYYY')}</p>

              <PopupClose onClick={closePopup}>Go Back</PopupClose>
            </PopupHeader>

            <TimeSlots selectedDate={selectedDate} />
          </Popup>
        )}
      </PopupWrapper>
    </Container>
  );
}

export default DateTimePicker;
