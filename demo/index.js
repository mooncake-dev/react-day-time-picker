import React, { useState } from 'react';
import { render } from 'react-dom';

import { Main } from './Layout';

import {
  Article,
  Header,
  Title,
  SubTitle,
  Interactive,
  Container,
  Caption
} from './Article';

import { CodeBlock, InlineCode } from './CodeBlock';

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
      <Article>
        <Header>
          <Title>React Date Time Picker</Title>

          <p>A React component to help with scheduling a day and time.</p>
        </Header>

        <SubTitle>Rendering the component</SubTitle>

        <p>
          On the most basic level, you can render the{' '}
          <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component by
          providing a <InlineCode>timeSlotSizeMinutes</InlineCode> prop:
        </p>

        <CodeBlock codeString={codeExample1} lang="jsx" />

        <p>
          This will render a basic calendar, where a day and time can be picked:
        </p>

        <Interactive>
          <DayTimePicker timeSlotSizeMinutes={15} />

          <Caption>
            Go ahead an pick a day and time. Each time slot corresponds to the{' '}
            <InlineCode>timeSlotSizeMinutes</InlineCode> props, which is set to
            15 minutes.
          </Caption>
        </Interactive>

        <p>
          You can style the{' '}
          <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component by
          wrapping it in a container. This will also allow you to render any
          additional information next to it (like a header):
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

        <SubTitle>Getting the scheduled day and time</SubTitle>

        <p>
          The <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component
          allows you to hook into the confirmation event (when a user clicks on
          the schedule button) by passing a handler function as the{' '}
          <InlineCode>onConfirm</InlineCode> prop. The handler will be called
          with a <InlineCode>Date</InlineCode> Object, that represents the
          picked date and time.
        </p>

        <p>
          This is useful if you want to do something with the picked day and
          time. Like sending it to an API or dispatching it to your application
          store.
        </p>

        <CodeBlock codeString={codeExample3} lang="jsx" />

        <SubTitle>Showing scheduling feedback</SubTitle>

        <p>
          When a user clicks on the schedule button, you can give them feedback
          about the scheduling process by tracking the following state:
        </p>

        <ul>
          <li>
            <InlineCode>isScheduling</InlineCode>: is the{' '}
            <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component
            loading or not (like when making an HTTP request).
          </li>
          <li>
            <InlineCode>isScheduled</InlineCode>: is the{' '}
            <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component done
            scheduling or not (like when an HTTP request was successful).
          </li>
          <li>
            <InlineCode>scheduleErr</InlineCode>: did an error occur while
            scheduling, which the{' '}
            <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component
            needs to show (like when an HTTP request failed).
          </li>
        </ul>

        <CodeBlock codeString={codeExample4} lang="jsx" />

        <p>
          You can simulate making an HTTP request with a function like this:
        </p>

        <CodeBlock codeString={codeExample5} lang="jsx" />

        <p>
          You can then call it from the <InlineCode>onConfirm</InlineCode>{' '}
          handler, where the state properties must be updated to reflect the
          stage in the scheduling process:
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
      </Article>
    </Main>
  );
}

const target = document.getElementById('root');
render(<App />, target);
