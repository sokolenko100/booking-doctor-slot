import {render} from '@testing-library/react-native';
import moment from 'moment';
import React from 'react';
import DateHeader from './header';

describe('DateHeader component', () => {
  test('moment library is correctly imported and used to manipulate dates', () => {
    const currentDate = moment();
    const prevWeek = currentDate.clone().subtract(1, 'week');
    const nextWeek = currentDate.clone().add(1, 'week');

    expect(prevWeek.isBefore(currentDate)).toBe(true);
    expect(nextWeek.isAfter(currentDate)).toBe(true);
  });

  test('date range is correctly displayed', () => {
    const currentDate = moment();
    const {getByText} = render(
      <DateHeader onPressPrevWeek={() => {}} onPressNextWeek={() => {}} />,
    );

    const dateRange = getByText(
      `${currentDate.clone().startOf('isoWeek').format('D MMM')} - ${currentDate
        .clone()
        .endOf('isoWeek')
        .format('D MMM')}`,
    );

    expect(dateRange).toBeTruthy();
  });

  test('previous week button updates the date correctly', () => {
    const currentDate = moment();
    const {getByText} = render(
      <DateHeader onPressPrevWeek={() => {}} onPressNextWeek={() => {}} />,
    );

    const prevWeekButton = getByText('<');
    prevWeekButton.props.onPress();

    const updatedDateRange = getByText(
      `${currentDate
        .clone()
        .subtract(1, 'week')
        .startOf('isoWeek')
        .format('D MMM')} - ${currentDate
        .clone()
        .subtract(1, 'week')
        .endOf('isoWeek')
        .format('D MMM')}`,
    );

    expect(updatedDateRange).toBeTruthy();
  });

  test('next week button updates the date correctly', () => {
    const currentDate = moment();
    const {getByText} = render(
      <DateHeader onPressPrevWeek={() => {}} onPressNextWeek={() => {}} />,
    );

    const nextWeekButton = getByText('>');
    nextWeekButton.props.onPress();

    const updatedDateRange = getByText(
      `${currentDate
        .clone()
        .add(1, 'week')
        .startOf('isoWeek')
        .format('D MMM')} - ${currentDate
        .clone()
        .add(1, 'week')
        .endOf('isoWeek')
        .format('D MMM')}`,
    );

    expect(updatedDateRange).toBeTruthy();
  });

  test('date range updates correctly when the component is re-rendered', () => {
    const currentDate = moment();
    const {getByText, rerender} = render(
      <DateHeader onPressPrevWeek={() => {}} onPressNextWeek={() => {}} />,
    );

    const initialDateRange = getByText(
      `${currentDate.clone().startOf('isoWeek').format('D MMM')} - ${currentDate
        .clone()
        .endOf('isoWeek')
        .format('D MMM')}`,
    );

    rerender(
      <DateHeader onPressPrevWeek={() => {}} onPressNextWeek={() => {}} />,
    );

    const updatedDateRange = getByText(
      `${currentDate.clone().startOf('isoWeek').format('D MMM')} - ${currentDate
        .clone()
        .endOf('isoWeek')
        .format('D MMM')}`,
    );

    expect(initialDateRange).toBe(updatedDateRange);
  });
});
