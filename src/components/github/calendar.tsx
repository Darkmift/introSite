import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ThemeInput } from 'react-activity-calendar';

const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
};

const Calendar = () => (
  <GitHubCalendar
    username="soumyajit4419"
    blockSize={15}
    blockMargin={5}
    theme={explicitTheme}
    fontSize={16}
  />
);

export default Calendar;
