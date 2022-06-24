import React, { useState, useEffect } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const ScheduleWrapper = styled.div``;
const MonthWrap = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
const WeekWrap = styled(FlexDiv)`
  background-color: #dde2e6;
`;
const Week = styled.div`
  width: 14.2%;
  text-align: center;
  color: ${(props) => props.color};
`;
const DayWrap = styled(FlexDiv)`
  flex-wrap: wrap;
`;
const Day = styled.div`
  width: 14.2%;
  height: 130px;
  color: ${(props) => props.color};
`;

const ScheduleCp = () => {
  const [now, setNow] = useState(new Date());
  const [year, setYear] = useState('');
  const [month, setMonth] = useState(now.getMonth());
  const [startWeek, setStartWeek] = useState('');
  const [totalDays, setTotalDays] = useState('');

  useEffect(() => {
    setYear(now.getFullYear());
  }, [now]);

  useEffect(() => {
    setStartWeek(new Date(now.getFullYear(), month, 0).getDay() + 1);
    setTotalDays(new Date(now.getFullYear(), month + 1, 0).getDate());
  }, [month]);

  const emptyDays = () => {
    let daysList = [];
    for (let i = 1; i <= startWeek; i++) {
      daysList.push(<Day key={i}></Day>);
    }
    return daysList;
  };

  const makeDays = () => {
    let daysList = [];
    for (let i = 1; i <= totalDays; i++) {
      daysList.push(
        <Day key={i} color={(startWeek + i) % 7 === 0 ? 'blue' : (startWeek + i) % 7 === 1 ? 'red' : ''}>
          {i}
        </Day>
      );
    }
    return daysList;
  };

  return (
    <ScheduleWrapper>
      <MonthWrap>
        <button onClick={() => setMonth(month - 1)}>이전</button>
        {year}년 {month + 1}월<button onClick={() => setMonth(month + 1)}>이후</button>
      </MonthWrap>
      <WeekWrap>
        <Week color={'red'}>일</Week>
        <Week>월</Week>
        <Week>화</Week>
        <Week>수</Week>
        <Week>목</Week>
        <Week>금</Week>
        <Week color={'blue'}>토</Week>
      </WeekWrap>
      <DayWrap>
        {emptyDays()}
        {makeDays()}
      </DayWrap>
    </ScheduleWrapper>
  );
};

export default React.memo(ScheduleCp);
