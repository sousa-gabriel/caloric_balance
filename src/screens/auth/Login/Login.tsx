import React from 'react'
import * as S from './LoginStyle'
import { Calendar } from '../../../components/calendar/Calendar'
import { useCalendar } from '../../../components/calendar/useCalendar'

export function Login() {
  const { markedDates, onDayPress, interval } = useCalendar()
  return (
    <S.ContainerLogin>
      <Calendar
        markedDates={markedDates}
        onDayPress={onDayPress}
        StartMarkedDates={interval}
      />
    </S.ContainerLogin>
  )
}
