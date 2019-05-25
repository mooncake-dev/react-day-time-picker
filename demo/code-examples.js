export const codeExample1 = `import React from 'react';
import { render } from 'react-dom';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

function App() {
  return <DayTimePicker timeSlotSizeMinutes={15}  />;
}

const target = document.getElementById('root');
render(<App />, target);`;

export const codeExample2 = `import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

const Container = styled.div\`
  width: 475px;
  margin: 1em auto;
  padding: 1em;
  background-color: #fff;
  color: #333;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px #00000018;

  @media (max-width: 520px) {
    width: 100%;
  }
\`;

function App() {
  return (
    <Container>
      <h3>Pick a Day and Time</h3>
      <DayTimePicker timeSlotSizeMinutes={15}  />
    </Container>
  );
}

const target = document.getElementById('root');
render(<App />, target);`;

export const codeExample3 = `function App() {
  const handleScheduled = dateTime => {
    console.log('scheduled: ', dateTime);
  };

  return <DayTimePicker onConfirm={handleScheduled} />;
}`;

export const codeExample4 = `function App() {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState('');

  return (
    <DayTimePicker
      timeSlotSizeMinutes={15}
      isLoading={isScheduling}
      isDone={isScheduled}
      err={scheduleErr}
    />
  );
}`;

export const codeExample5 = `function fakeRequest(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment below to trigger error:
      // return reject('Error: KABOOM!');

      resolve({
        status: 'ok',
        scheduled: data
      });
    }, 2e3);
  });
}`;

export const codeExample6 = `function App() {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState('');

  const handleScheduled = date => {
    setIsScheduling(true);
    setScheduleErr('');

    fakeRequest(date)
      .then(json => {
        setScheduleErr('');
        setIsScheduled(true);
        console.log('fake response: ', json);
      })
      .catch(err => {
        setScheduleErr(err);
      })
      .finally(() => {
        setIsScheduling(false);
      });

  return (
    <DayTimePicker
      timeSlotSizeMinutes={15}
      isLoading={isScheduling}
      isDone={isScheduled}
      err={scheduleErr}
      onConfirm={handleScheduled}
    />
  );
}`;
