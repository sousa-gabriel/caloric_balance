import { eachDayOfInterval, format, addDays } from 'date-fns'
import { Platform } from 'react-native'
import { IDay, IMarkedDate } from './Calendar'
import { theme } from '@theme'

export function getPlatFromDate(date: Date) {
  if (Platform.OS === 'ios') {
    return addDays(date, 1)
  } else {
    return addDays(date, 1)
  }
}

export function generateInterval(start: IDay, end: IDay, formatted?: boolean) {
  let interval: IMarkedDate = {}

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach(item => {
    const date = formatted
      ? format(item, 'yyyy-MM-dd')
      : format(getPlatFromDate(item), 'yyyy-MM-dd')
    interval = {
      ...interval,
      [date]: {
        startingDay: start.dateString === date,
        endingDay: end.dateString === date,
        color: theme.colors.primary,
        textColor: theme.colors.onPrimary,
      },
    }
  })

  return interval
}
