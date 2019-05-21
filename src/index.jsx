import React, { useState } from 'react';

import Container from './Container';
import Calendar from './calendar';
import { PopupWrapper, Popup } from './Popup';

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
          <Popup handleClose={closePopup} selectedDate={selectedDate} />
        )}
      </PopupWrapper>
    </Container>
  );
}

export default DateTimePicker;
