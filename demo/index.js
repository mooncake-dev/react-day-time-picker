import React, { useState } from 'react';
import { render } from 'react-dom';

import {
  Main,
  Header,
  Content,
  Section,
  Interactive,
  Caption,
  Container
} from './Layout';

import CodeBlock from './CodeBlock';

import { fakeRequest } from './request';
// import { dayValidator, timeValidator } from './validators';
// import theme from './theme';

import {
  codeExample1,
  codeExample2,
  codeExample3,
  codeExample4,
  codeExample5,
  codeExample6
} from './code-examples';

import DayTimePicker from '../src';

function App() {
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
        console.log('fake response: ', json); // eslint-disable-line no-console
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
      <Header>
        <h1>React Date Time Picker</h1>
      </Header>

      <Content>
        <Section>
          <p>A React component to help with scheduling a day and time.</p>
        </Section>

        <Section>
          <h2>Rendering the component</h2>

          <p>
            On the most basic level, you can render the{' '}
            <code>&#60;DayTimePicker&#47;&#62;</code> component by providing a{' '}
            <code>timeSlotSizeMinutes</code> prop:
          </p>

          <CodeBlock codeString={codeExample1} lang="jsx" />

          <p>
            This will render a basic calendar, where a day and time can be
            picked:
          </p>

          <Interactive>
            <DayTimePicker timeSlotSizeMinutes={15} />

            <Caption>Go ahead an pick a day and time.</Caption>

            <Caption>
              Each time slot corresponds to the <code>timeSlotSizeMinutes</code>{' '}
              props, which is set to 15 minutes.
            </Caption>
          </Interactive>

          <p>
            You can style the <code>&#60;DayTimePicker&#47;&#62;</code>{' '}
            component by wrapping it in a container. This will also allow you to
            render any additional information next to it (like a header):
          </p>

          <CodeBlock codeString={codeExample2} lang="jsx" />

          <Interactive>
            <Container>
              <h3>Pick a Day and Time</h3>

              <DayTimePicker timeSlotSizeMinutes={15} />
            </Container>

            <Caption>
              Nothing happens yet when clicking on schedule after picking a day
              and time.
            </Caption>
          </Interactive>

          <p>
            Read ahead to see how to get the picked day and time after a user
            clicks on the schedule button.
          </p>
        </Section>

        <Section>
          <h2>Getting the scheduled day and time</h2>

          <p>
            The <code>&#60;DayTimePicker&#47;&#62;</code> component allows you
            to hook into the confirmation event (when a user clicks on the
            schedule button) by passing a handler function as the{' '}
            <code>onConfirm</code> prop. The handler will be called with a{' '}
            <code>Date</code> Object, that represents the picked date and time.
          </p>

          <p>
            This is useful if you want to do something with the picked day and
            time. Like sending it to an API or dispatching it to your
            application store.
          </p>

          <CodeBlock codeString={codeExample3} lang="jsx" />
        </Section>

        <Section>
          <h2>Showing scheduling feedback</h2>

          <p>
            When a user clicks on the schedule button, you can give them
            feedback about the scheduling process by tracking the following
            state:
          </p>

          <ul>
            <li>
              <code>isScheduling</code>: is the{' '}
              <code>&#60;DayTimePicker&#47;&#62;</code> component loading or not
              (like when making an HTTP request).
            </li>
            <li>
              <code>isScheduled</code>: is the{' '}
              <code>&#60;DayTimePicker&#47;&#62;</code> component done
              scheduling or not (like when an HTTP request was successful).
            </li>
            <li>
              <code>scheduleErr</code>: did an error occur while scheduling,
              which the <code>&#60;DayTimePicker&#47;&#62;</code> component
              needs to show (like when an HTTP request failed).
            </li>
          </ul>

          <CodeBlock codeString={codeExample4} lang="jsx" />

          <p>
            You can simulate making an HTTP request with a function like this:
          </p>

          <CodeBlock codeString={codeExample5} lang="jsx" />

          <p>
            You can then call it from the <code>onConfirm</code> handler, where
            the state properties must be updated to reflect the stage in the
            scheduling process:
          </p>

          <CodeBlock codeString={codeExample6} lang="jsx" />

          <Interactive>
            <Container>
              <h3>Pick a Day and Time</h3>

              <DayTimePicker
                timeSlotSizeMinutes={15}
                isLoading={isScheduling}
                isDone={isScheduled}
                err={scheduleErr}
                onConfirm={handleScheduled}
              />
            </Container>

            <Caption>
              Schedule a date and time, then open your console to see the fake
              response being logged.
            </Caption>
          </Interactive>
        </Section>
      </Content>
    </Main>
  );
}

const target = document.getElementById('root');
render(<App />, target);
