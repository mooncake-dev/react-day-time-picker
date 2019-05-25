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

import { TableWrapper, Table, TH, TD } from './Table';

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

          <ul>
            <li>
              <a href="#installation">Installation</a>
            </li>

            <li>
              <a href="#api">API</a>
            </li>

            <li>
              <a href="#basic-usage">Basic usage</a>

              <ul>
                <li>
                  <a href="#rendering-the-component">Rendering the component</a>
                </li>

                <li>
                  <a href="#getting-the-scheduled-day-and-time">
                    Getting the scheduled day and time
                  </a>
                </li>

                <li>
                  <a href="#showing-scheduling-feedback">
                    Showing scheduling feedback
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Header>

        <SubTitle>Installation</SubTitle>

        <CodeBlock
          codeString="npm i @mooncake-dev/react-day-time-picker"
          lang="shell"
        />

        <SubTitle>API</SubTitle>

        <p>The following props are exposed:</p>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <TH>Name</TH>
                <TH>Type</TH>
                <TH>Required</TH>
                <TH>Default</TH>
                <TH>Description</TH>
              </tr>
            </thead>

            <tbody>
              <tr>
                <TD>
                  <InlineCode>timeSlotSizeMinutes</InlineCode>
                </TD>
                <TD>Number</TD>
                <TD>Yes</TD>
                <TD>-</TD>
                <TD alignLeft>
                  The size of the time slots a user can pick, after picking a
                  day,
                </TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>isLoading</InlineCode>
                </TD>
                <TD>Boolean</TD>
                <TD>Yes</TD>
                <TD>-</TD>
                <TD alignLeft>
                  If the <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode>{' '}
                  component is loading or not.
                </TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>isDone</InlineCode>
                </TD>
                <TD>Boolean</TD>
                <TD>Yes</TD>
                <TD>-</TD>
                <TD alignLeft>
                  If the <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode>{' '}
                  component is done scheduling or not.
                </TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>err</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>Yes</TD>
                <TD>-</TD>
                <TD alignLeft>
                  Any error that occured while scheduling and the{' '}
                  <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode>{' '}
                  component should show.
                </TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>onConfirm</InlineCode>
                </TD>
                <TD>Function</TD>
                <TD>Yes</TD>
                <TD>-</TD>
                <TD alignLeft>
                  Handler function that is called when a user clicks the
                  schedule button, after picking a date and time.
                </TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>confirmText</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>No</TD>
                <TD>Schedule</TD>
                <TD alignLeft>Custom text to show in the schedule button.</TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>loadingText</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>No</TD>
                <TD>Scheduling..</TD>
                <TD alignLeft>Custom text to show during loading.</TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>doneText</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>No</TD>
                <TD>Your event has been scheduled!</TD>
                <TD alignLeft>Custom text to show when scheduling is done.</TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>dayValidator</InlineCode>
                </TD>
                <TD>Function</TD>
                <TD>No</TD>
                <TD>-</TD>
                <TD alignLeft>
                  A validator function to determine if a day can be selected by
                  the user or not.
                </TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>timeValidator</InlineCode>
                </TD>
                <TD>Function</TD>
                <TD>No</TD>
                <TD>-</TD>
                <TD alignLeft>
                  A validator function to determine if a time slot can be
                  selected by the user or not.
                </TD>
              </tr>

              <tr>
                <TD>
                  <InlineCode>theme</InlineCode>
                </TD>
                <TD>Object</TD>
                <TD>No</TD>
                <TD>-</TD>
                <TD alignLeft>
                  Contains theme properties to customize the look of the{' '}
                  <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode>{' '}
                  component.
                </TD>
              </tr>
            </tbody>
          </Table>
        </TableWrapper>

        <SubTitle>Basic usage</SubTitle>

        <SubTitle level={2}>Rendering the component</SubTitle>

        <p>
          To get an impression of the{' '}
          <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component, you
          can render it by providing the{' '}
          <InlineCode>timeSlotSizeMinutes</InlineCode> prop:
        </p>

        <CodeBlock codeString={codeExample1} lang="jsx" />

        <p>
          This will render a basic calendar, where a day and time can be picked:
        </p>

        <Interactive>
          <DayTimePicker timeSlotSizeMinutes={15} />

          <Caption>
            Go ahead and click around, but it&apos;s a semi-functional
            component. Clicking the schedule button doesn&apos;t do anything,
            because not all required props are passed yet.
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
        </Interactive>

        <p>
          Read ahead to see how to get the picked day and time after a user
          clicks on the schedule button.
        </p>

        <SubTitle level={2}>Getting the scheduled day and time</SubTitle>

        <p>
          The <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component
          allows you to hook into the confirmation event (when a user clicks on
          the schedule button) by passing a handler function as the{' '}
          <InlineCode>onConfirm</InlineCode> prop. The handler will be called
          with a <InlineCode>Date</InlineCode> Object, which represents the
          picked date and time.
        </p>

        <p>
          This is useful if you want to do something with the picked day and
          time. Like sending it to an API or dispatching it to your application
          store.
        </p>

        <CodeBlock codeString={codeExample3} lang="jsx" />

        <SubTitle level={2}>Showing scheduling feedback</SubTitle>

        <p>
          When a user clicks on the schedule button, you can give them feedback
          about the scheduling process by tracking the following state:
        </p>

        <ul>
          <li>
            <InlineCode>isScheduling</InlineCode>: if the{' '}
            <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component is
            loading or not (like when making an HTTP request).
          </li>

          <li>
            <InlineCode>isScheduled</InlineCode>: if the{' '}
            <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component is
            done scheduling or not (like when an HTTP request was successful).
          </li>

          <li>
            <InlineCode>scheduleErr</InlineCode>: any error that occured while
            scheduling and the{' '}
            <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component
            should show (like when an HTTP request failed).
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
            Schedule a date and time and open your console to see the fake
            response logged.
          </Caption>
        </Interactive>
      </Article>
    </Main>
  );
}

const target = document.getElementById('root');
render(<App />, target);
