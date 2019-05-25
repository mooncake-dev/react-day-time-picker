import React, { useState } from 'react';
import { render } from 'react-dom';

import { Main } from './components/Layout';

import {
  Article,
  Header,
  Title,
  SubTitle,
  Interactive,
  Caption
} from './components/Article';

import { CodeBlock, InlineCode } from './components/CodeBlock';
import { TableWrapper, Table, TH, TD } from './components/Table';
import { Container, DarkContainer } from './components/Container';

import { fakeRequest } from './request';
import { dayValidator, timeSlotValidator } from './validators';
import theme from './theme';

import {
  codeExample1,
  codeExample2,
  codeExample3,
  codeExample4,
  codeExample5,
  codeExample6,
  codeExample7,
  codeExample8,
  codeExample9
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

            <li>
              <a href="#advanced-usage">Advanced usage</a>

              <ul>
                <li>
                  <a href="#using-the-day-validator">Using the day validator</a>
                </li>

                <li>
                  <a href="#using-the-time-slot-validator">
                    Using the time slot validator
                  </a>
                </li>

                <li>
                  <a href="#theming">Theming</a>
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
                <TD alignLeft>
                  <InlineCode>timeSlotSizeMinutes</InlineCode>
                </TD>
                <TD>Number</TD>
                <TD>Yes</TD>
                <TD>-</TD>
                <TD alignLeft>
                  The size of the time slots a user can pick, after picking a
                  day.
                </TD>
              </tr>

              <tr>
                <TD alignLeft>
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
                <TD alignLeft>
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
                <TD alignLeft>
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
                <TD alignLeft>
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
                <TD alignLeft>
                  <InlineCode>confirmText</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>No</TD>
                <TD>Schedule</TD>
                <TD alignLeft>Custom text to show in the schedule button.</TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>loadingText</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>No</TD>
                <TD>Scheduling..</TD>
                <TD alignLeft>Custom text to show during loading.</TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>doneText</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>No</TD>
                <TD>Your event has been scheduled!</TD>
                <TD alignLeft>Custom text to show when scheduling is done.</TD>
              </tr>

              <tr>
                <TD alignLeft>
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
                <TD alignLeft>
                  <InlineCode>timeSlotValidator</InlineCode>
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
                <TD alignLeft>
                  <InlineCode>theme</InlineCode>
                </TD>
                <TD>Object</TD>
                <TD>No</TD>
                <TD>-</TD>
                <TD alignLeft>
                  Contains <a href="#theming">theme properties</a> to customize
                  the look of the{' '}
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
          More advanced <a href="#theming">theming</a> options are available to
          further customize how the{' '}
          <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> looks.
        </p>

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

        <CodeBlock codeString={codeExample5} lang="js" />

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

        <SubTitle>Advanced usage</SubTitle>

        <SubTitle level={2}>Using the day validator</SubTitle>

        <p>
          You can pass a validator function as the{' '}
          <InlineCode>dayValidator</InlineCode> prop, to determine if a day can
          be selected by the user or not.
        </p>

        <p>
          The validator function is called by the{' '}
          <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> when it renders
          the days in the calendar view. The validator is called with a{' '}
          <InlineCode>Date</InlineCode> Object, which represents a day in the
          month. And it will be called for every day in the selected month.
        </p>

        <p>
          The validator function should return <InlineCode>true</InlineCode> if
          the day is considered valid, and the user should be able to pick it.
          And <InlineCode>false</InlineCode> if the day is considered invalid,
          and the user should <i>not</i> be able to pick it.
        </p>

        <p>
          For example, if you want to prevent the user to be able to pick days
          in the past, you can provide:
        </p>

        <CodeBlock codeString={codeExample7} lang="jsx" />

        <Interactive>
          <Container>
            <h3>Pick a Day and Time</h3>

            <DayTimePicker
              timeSlotSizeMinutes={15}
              dayValidator={dayValidator}
            />
          </Container>

          <Caption>Past days can&apos;t be picked.</Caption>
        </Interactive>

        <SubTitle level={2}>Using the time slot validator</SubTitle>

        <p>
          You can pass a validator function as the{' '}
          <InlineCode>timeSlotValidator</InlineCode> prop, to determine if a
          time slot can be selected by the user or not.
        </p>

        <p>
          The validator function is called by the{' '}
          <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> when it renders
          the time slots in the calendar view. The validator is called with a{' '}
          <InlineCode>Date</InlineCode> Object, which represents a time slot in
          a picked day. And it will be called for every available time slot,
          depending on the size of the{' '}
          <InlineCode>timeSlotSizeMinutes</InlineCode> prop.
        </p>

        <p>
          The validator function should return <InlineCode>true</InlineCode> if
          the time slot is considered valid, and the user should be able to pick
          it. And <InlineCode>false</InlineCode> if the time slot is considered
          invalid, and the user should <i>not</i> be able to pick it.
        </p>

        <p>
          For example, if you want the user to only be able to pick time slots
          in the evening, you can provide:
        </p>

        <CodeBlock codeString={codeExample8} lang="jsx" />

        <Interactive>
          <Container>
            <h3>Pick a Day and Time</h3>

            <DayTimePicker
              timeSlotSizeMinutes={15}
              timeSlotValidator={timeSlotValidator}
            />
          </Container>

          <Caption>Only time slots in the evening can be picked.</Caption>
        </Interactive>

        <SubTitle level={2}>Theming</SubTitle>

        <p>
          You can customize the look of the{' '}
          <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode> component by
          providing a <InlineCode>theme</InlineCode> prop. This value must be an
          Object and may contain one or more of the following properties:
        </p>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <TH>Name</TH>
                <TH>Type</TH>
                <TH>Default</TH>
                <TH>Description</TH>
              </tr>
            </thead>

            <tbody>
              <tr>
                <TD alignLeft>
                  <InlineCode>primary</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#3a9ad9</TD>
                <TD alignLeft>
                  The color of the current day- and hover highlights.
                </TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>secondary</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#f0f0f0</TD>
                <TD alignLeft>
                  The background color of the month navigation buttons, and
                  color of borders.
                </TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>background</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#fff</TD>
                <TD alignLeft>
                  The main background color. Note that this should match the
                  background color of the component wrapping the{' '}
                  <InlineCode>&#60;DayTimePicker&#47;&#62;</InlineCode>{' '}
                  component.
                </TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>buttons.disabled.color</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#333</TD>
                <TD alignLeft>The text color of a disabled button.</TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>buttons.disabled.background</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#dfdfdf</TD>
                <TD alignLeft>The background color of a disabled button.</TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>buttons.confirm.color</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#fff</TD>
                <TD alignLeft>The color of the confirm (schedule) button.</TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>buttons.confirm.background</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#3a9ad9</TD>
                <TD alignLeft>
                  The background color of the confirm (schedule) button.
                </TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>buttons.confirm.hover.color</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>-</TD>
                <TD alignLeft>
                  The hover color of the confirm (schedule) button.
                </TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>buttons.confirm.hover.background</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#3a9ad9d6</TD>
                <TD alignLeft>
                  The hover background color of the confirm (schedule) button.
                </TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>feedback.success.color</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#29aba4</TD>
                <TD alignLeft>The color of success feedback messages.</TD>
              </tr>

              <tr>
                <TD alignLeft>
                  <InlineCode>feedback.failed.color</InlineCode>
                </TD>
                <TD>String</TD>
                <TD>#eb7260</TD>
                <TD alignLeft>The color of failed feedback messages.</TD>
              </tr>
            </tbody>
          </Table>
        </TableWrapper>

        <p>
          For example, to use a dark theme, provide the following theme Object:
        </p>

        <CodeBlock codeString={codeExample9} lang="jsx" />

        <Interactive>
          <DarkContainer>
            <h3>Pick a Day and Time</h3>

            <DayTimePicker timeSlotSizeMinutes={15} theme={theme} />
          </DarkContainer>

          <Caption>
            Note that properties like text color are inherited from the wrapping
            component.
          </Caption>
        </Interactive>
      </Article>
    </Main>
  );
}

const target = document.getElementById('root');
render(<App />, target);
