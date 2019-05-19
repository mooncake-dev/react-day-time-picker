import React from 'react';

import Container from './Container';
import Calendar from './calendar';

function DateTimePicker() {
  return (
    <Container>
      <h3>Pick a Date and Time</h3>

      <Calendar />
    </Container>
  );
}

export default DateTimePicker;
