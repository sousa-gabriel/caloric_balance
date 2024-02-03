import React from 'react'
import { ptBR, maxDataGeneral, minDataGeneral } from './utils.config'
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars'
import { generateInterval } from './generateInterval'
import { theme } from '../../theme/theme'
import { IconWrapper } from '../iconWrapper/IconWrapper'
import { Dimensions } from 'react-native'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export interface IMarkedDate {
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvent?: boolean
    startingDay?: boolean
    endingDay?: boolean
  }
}

export interface IDay {
  dateString: string
  day: number
  month: number
  year: number
  timestamp: number
}
interface ICalendar {
  markedDates: IMarkedDate
  onDayPress: (date: IDay) => void
  StartMarkedDates: IMarkedDate
}

const Calendar = ({ markedDates, onDayPress, StartMarkedDates }: ICalendar) => {
  const isHaveSelected = Object.keys(markedDates).length > 0
  return (
    <CustomCalendar
      renderArrow={direction => (
        <IconWrapper
          icon={direction === 'left' ? 'arrow-left' : 'arrow-right'}
          color={'onPrimary'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.primary,
        marginBottom: 10,
        width: Dimensions.get('window').width - 44,
      }}
      theme={{
        calendarBackground: theme.colors.background,
        textDayFontFamily: 'Roboto-Regular',
        textDayHeaderFontFamily: 'Roboto-Bold',
        textDayHeaderFontSize: 12,
        textMonthFontFamily: 'Roboto-Bold',
        textSectionTitleColor: theme.colors.onPrimary,
        textMonthFontSize: 24,
        monthTextColor: theme.colors.onPrimary,
        textDisabledColor: theme.colors.disabled,
        dayTextColor: theme.colors.secondary,

        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        width: Dimensions.get('window').width - 32,
        margin: 0,
        paddingBottom: 6,
        backgroundColor: theme.colors.primary,
      }}
      markingType="period"
      markedDates={isHaveSelected ? markedDates : StartMarkedDates}
      minDate={minDataGeneral}
      maxDate={maxDataGeneral}
      onDayPress={onDayPress}
    />
  )
}
export { Calendar, generateInterval }
