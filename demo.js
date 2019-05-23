import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import DayTimePicker from './src';

const Main = styled.main`
  box-sizing: border-box;
  display: grid;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  margin: auto;
  padding: 1em;
  background-color: #fff;
  color: #333;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px #00000018;

  @media (max-width: 460px) {
    width: 100%;
    border-radius: 0;
  }
`;

function fakeRequest(data) {
  console.log('fake request with data: ', data); // eslint-disable-line no-console

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment below to trigger error:
      // return reject('KABOOM!');

      resolve();
    }, 2e3);
  });
}

// TODO: pass validator as prop
// "calendarDay" is a Date Object that starts at "00:00:00" hours, e.g.:
// "Sun Apr 28 2019 00:00:00 GMT+0200 (Central European Summer Time)"
function dayValidator(calendarDay) {
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  );

  const isValid = calendarDay.getTime() >= today.getTime();
  return isValid;
}

// "slotTime" is a Date Object
// NOTE: currently not passed as prop
function timeValidator(slotTime) {
  const validTimes = [
    new Date('Tue May 21 2019 14:15:00 GMT+0200').getTime(),
    new Date('Tue May 21 2019 15:15:00 GMT+0200').getTime()
  ];
  const isValid = validTimes.includes(slotTime.getTime());
  return isValid;
}

// NOTE: currently not passed as prop
const theme = {
  primary: 'gold',
  secondary: 'slategrey',

  // This should match the container background
  // Text color is inherited from the container
  background: '#333',

  buttons: {
    disabled: {
      color: '#333',
      background: '#f0f0f0'
    },
    confirm: {
      color: '#fff',
      background: 'slategrey',
      hover: {
        color: '',
        background: 'lightslategrey'
      }
    }
  }
};

function App() {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState('');

  const handleScheduled = date => {
    setIsScheduling(true);
    setScheduleErr('');

    fakeRequest(date)
      .then(() => {
        setScheduleErr('');
        setIsScheduled(true);
      })
      .catch(err => {
        setScheduleErr(err);
      })
      .finally(() => {
        setIsScheduling(false);
      });
  };

  return (
    <Main>
      <Container>
        <h3>Pick a Day and Time</h3>

        <DayTimePicker
          dayValidator={dayValidator}
          timeValidator={undefined}
          timeSlotSizeMinutes={15}
          isLoading={isScheduling}
          isDone={isScheduled}
          err={scheduleErr}
          onConfirm={handleScheduled}
          confirmText="Schedule Assignment"
          loadingText="Scheduling.."
          doneText="Your assignment has been scheduled!"
          theme={undefined}
        />
      </Container>
    </Main>
  );
}

const target = document.getElementById('demo-app');

render(<App />, target);
