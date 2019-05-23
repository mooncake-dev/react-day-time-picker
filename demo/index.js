import React, { useState } from 'react';
import { render } from 'react-dom';

import { Main, Container } from './Layout';
import Code from './Code';

import { fakeRequest } from './request';
import { dayValidator, timeValidator } from './validators';
import theme from './theme';

import DayTimePicker from '../src';

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

        <Code codeString="console.log('hello world');" lang="javascript" />

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
