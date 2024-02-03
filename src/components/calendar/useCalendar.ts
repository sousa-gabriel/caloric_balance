import { useState } from 'react'
import { format } from 'date-fns'
import { IDay, IMarkedDate, generateInterval } from './Calendar'

export const useCalendar = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<IDay>({} as IDay)
  const [markedDates, setMarkedDates] = useState({} as IMarkedDate)
  const [interval, setInterval] = useState<IMarkedDate>({} as IMarkedDate)
  const [startInterval, setStartInterval] = useState('')
  const [endInterval, setEndInterval] = useState('')

  function handleChangeDate(date: IDay) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(date)
    const interval = generateInterval(start, end)

    setMarkedDates(interval)
    setStartInterval(format(start.timestamp, 'dd/MM/yyyy'))
    setEndInterval(format(end.timestamp, 'dd/MM/yyyy'))

    const startInterval = generateInterval(start, end, true)
    setInterval(startInterval)
  }

  return {
    markedDates,
    onDayPress: handleChangeDate,
    interval,
    startInterval,
    endInterval,
  }
}
