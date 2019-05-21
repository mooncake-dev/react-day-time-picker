import React, { useState } from 'react';
import dateFns from 'date-fns';

import { Grid, Wrapper, MonthYear, DaysOfWeek, DaysOfMonth } from './Layout';
import { WeekDays, WeekDay, WEEK_DAYS } from './WeekDays';
import { MonthDays, MonthDay } from './MonthDays';
import { PrevIcon, NextIcon } from './Icons';

import {
  MonthPicker,
  PrevMonth,
  NextMonth,
  CurrentMonth,
  FakeCurrentMonth
} from './MonthPicker';

import { Calendar, FakeCalendar } from './Calendar';

import Popup from './Popup';

function _renderDays(month) {
  const start = dateFns.startOfMonth(month);
  const end = dateFns.endOfMonth(month);

  const firstDay = dateFns.startOfWeek(start);
  const lastDay = dateFns.endOfWeek(end);

  const days = [];
  let day = firstDay;

  while (day <= lastDay) {
    days.push(day);
    day = dateFns.addDays(day, 1);
  }

  return [start, days];
}

function Root() {
  // TODO: pass date as prop
  const [month, setMonth] = useState(new Date());
  const [fakeMonth, setFakeMonth] = useState(month);
  const [selectedDate, setSelectedDate] = useState(null);
  const [animation, setAnimation] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const [startDay, days] = _renderDays(month);
  const [fakeStartDay, fakeDays] = _renderDays(fakeMonth);

  const isAnimating = !!animation;

  // Handlers
  const handleNextMonth = () => {
    if (isAnimating) {
      return;
    }

    const next = dateFns.addMonths(month, 1);
    setMonth(next);
    setAnimation('next');
  };

  const handlePrevMonth = () => {
    if (isAnimating) {
      return;
    }

    const prev = dateFns.subMonths(month, 1);
    setMonth(prev);
    setAnimation('prev');
  };

  const handleAnimationEnd = () => {
    const newFakeMonth =
      animation === 'prev'
        ? dateFns.subMonths(fakeMonth, 1)
        : dateFns.addMonths(fakeMonth, 1);

    setFakeMonth(newFakeMonth);
    setAnimation('');
  };

  const handleSelectDate = selectedDate => {
    if (isAnimating) {
      return;
    }

    setSelectedDate(selectedDate);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  // TODO: pass validator as prop
  // "day" is a Date Object that starts at "00:00:00" hours, e.g.:
  // "Sun Apr 28 2019 00:00:00 GMT+0200 (Central European Summer Time)"
  const validator = day => {
    const now = new Date();
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );

    const isValid = day.getTime() >= today.getTime();
    return isValid;
  };

  return (
    <Wrapper>
      {showPopup && (
        <Popup handleClose={closePopup} selectedDate={selectedDate} />
      )}

      <Grid>
        <MonthYear>
          <MonthPicker>
            <PrevMonth disabled={isAnimating} onClick={handlePrevMonth}>
              <PrevIcon />
            </PrevMonth>

            <Wrapper>
              <CurrentMonth animation={animation}>
                {dateFns.format(month, 'MMMM YYYY')}
              </CurrentMonth>

              <FakeCurrentMonth animation={animation}>
                {dateFns.format(fakeMonth, 'MMMM YYYY')}
              </FakeCurrentMonth>
            </Wrapper>

            <NextMonth disabled={isAnimating} onClick={handleNextMonth}>
              <NextIcon />
            </NextMonth>
          </MonthPicker>
        </MonthYear>

        <Wrapper>
          <Calendar animation={animation} onAnimationEnd={handleAnimationEnd}>
            <DaysOfWeek>
              <WeekDays>
                {WEEK_DAYS.map(weekDay => {
                  return <WeekDay key={weekDay}>{weekDay}</WeekDay>;
                })}
              </WeekDays>
            </DaysOfWeek>

            <MonthDays>
              {days.map(day => {
                const formatted = dateFns.format(day, 'D');
                const isSameMonth = dateFns.isSameMonth(day, startDay);
                const isToday = dateFns.isToday(day);
                const isValid = validator ? validator(day) : true;
                return (
                  <MonthDay
                    key={day}
                    disabled={!isSameMonth}
                    isValid={isValid}
                    isToday={isToday}
                    onClick={() => isValid && handleSelectDate(day)}
                  >
                    {formatted}
                  </MonthDay>
                );
              })}
            </MonthDays>
          </Calendar>

          <FakeCalendar animation={animation}>
            <DaysOfWeek>
              <WeekDays>
                {WEEK_DAYS.map(weekDay => {
                  return <WeekDay key={weekDay}>{weekDay}</WeekDay>;
                })}
              </WeekDays>
            </DaysOfWeek>

            <DaysOfMonth>
              <MonthDays>
                {fakeDays.map(fakeDay => {
                  const formatted = dateFns.format(fakeDay, 'D');
                  const isSameMonth = dateFns.isSameMonth(
                    fakeDay,
                    fakeStartDay
                  );
                  const isToday = dateFns.isToday(fakeDay);
                  const isValid = validator ? validator(fakeDay) : true;
                  return (
                    <MonthDay
                      key={fakeDay}
                      disabled={!isSameMonth}
                      isValid={isValid}
                      isToday={isToday}
                    >
                      {formatted}
                    </MonthDay>
                  );
                })}
              </MonthDays>
            </DaysOfMonth>
          </FakeCalendar>
        </Wrapper>
      </Grid>
    </Wrapper>
  );
}

export default Root;
