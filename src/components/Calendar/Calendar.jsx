import React, { useState, useEffect } from 'react'
import * as S from './Calendar.styled'
import {
    formatDate,
    generateMonthDays,
    parseDate,
    isSameDate,
    isDateInRange,
} from '../../utils/dateUtils'
import { getDateClasses } from '../../utils/calendarClasses'

const Calendar = ({ selectedPeriod, onPeriodSelect, onBack }) => {
    const [tempStart, setTempStart] = useState(null)
    const [tempEnd, setTempEnd] = useState(null)
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768)

    const year = 2026
    const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    // Сегодняшняя дата для подсветки
    const today = new Date()
    const todayString = formatDate(
        today.getDate(),
        today.getMonth() + 1,
        today.getFullYear()
    )

    // Отслеживаем изменение размера экрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Сбрасываем временный выбор при изменении selectedPeriod с помощью ключа
    const [instanceKey] = useState(() =>
        selectedPeriod
            ? `${selectedPeriod.from}-${selectedPeriod.to}`
            : 'no-period'
    )

    const displayFrom =
        tempStart || tempEnd ? null : (selectedPeriod?.from ?? null)
    const displayTo = tempStart || tempEnd ? null : (selectedPeriod?.to ?? null)

    // Обработчик клика по дате
    const handleDateClick = (day, monthIndex) => {
        if (day === '') return

        const clickedDateStr = formatDate(day, monthIndex + 1, year)
        const clicked = parseDate(clickedDateStr)

        // Первый клик (или после сброса)
        if (!tempStart) {
            setTempStart(clicked)
            setTempEnd(null)
            return
        }

        // Второй клик — завершаем диапазон
        if (!tempEnd) {
            const startObj = new Date(
                tempStart.year,
                tempStart.month - 1,
                tempStart.day
            )
            const clickedObj = new Date(
                clicked.year,
                clicked.month - 1,
                clicked.day
            )

            const [newStart, newEnd] =
                startObj <= clickedObj
                    ? [tempStart, clicked]
                    : [clicked, tempStart]

            setTempStart(newStart)
            setTempEnd(newEnd)

            // Автоприменение на десктопе
            if (!isMobile) {
                onPeriodSelect({
                    from: formatDate(
                        newStart.day,
                        newStart.month,
                        newStart.year
                    ),
                    to: formatDate(newEnd.day, newEnd.month, newEnd.year),
                })
                setTempStart(null)
                setTempEnd(null)
            }
            return
        }

        // Если уже был полный временный период — начинаем заново
        setTempStart(clicked)
        setTempEnd(null)
    }

    // Кнопка "Выбрать период" для мобильных
    const handleApplyPeriod = () => {
        if (!tempStart || !tempEnd) return

        const newPeriod = {
            from: formatDate(tempStart.day, tempStart.month, tempStart.year),
            to: formatDate(tempEnd.day, tempEnd.month, tempEnd.year),
        }
        onPeriodSelect(newPeriod)
        setTempStart(null)
        setTempEnd(null)
    }

    return (
        <S.CalendarContainer key={instanceKey}>
            <S.CalendarHeader>
                <S.CalendarTitle>Период</S.CalendarTitle>

                {/* Мобильный хедер с кнопкой "назад" */}

                <S.CalendarTitleMobile>
                    <S.Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault()
                            onBack?.()
                        }}
                    >
                        <S.LinkIconMob>➜</S.LinkIconMob>
                        <S.LinkTitleMob>Анализ расходов</S.LinkTitleMob>
                    </S.Link>
                    <S.CalendarTitleMob>Выбор периода</S.CalendarTitleMob>
                </S.CalendarTitleMobile>

                {/* Дни недели */}
                <S.WeekdaysContainer>
                    {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((day) => (
                        <S.Weekday key={day}>{day}</S.Weekday>
                    ))}
                </S.WeekdaysContainer>
            </S.CalendarHeader>

            {/* Скроллируемая сетка месяцев */}
            <S.CalendarScrollable>
                {monthNames.map((monthName, monthIndex) => {
                    const monthDays = generateMonthDays(monthIndex, year)

                    return (
                        <S.MonthContainer key={monthIndex}>
                            <S.MonthTitle>
                                {monthName} {year}
                            </S.MonthTitle>
                            <S.MonthDaysGrid>
                                {monthDays.map((day, i) => {
                                    // Пустые ячейки
                                    if (day.isEmpty) {
                                        return (
                                            <S.MonthDay
                                                key={i}
                                                className="empty"
                                            />
                                        )
                                    }

                                    const dayOfWeek = i % 7
                                    const isWeekend =
                                        dayOfWeek === 5 || dayOfWeek === 6
                                    const formattedDate = formatDate(
                                        day.number,
                                        monthIndex + 1,
                                        year
                                    )
                                    const isCurrent =
                                        formattedDate === todayString

                                    // Получаем классы через утилиту (KISS + DRY)
                                    const classes = getDateClasses(
                                        day.number,
                                        monthIndex,
                                        year,
                                        {
                                            from: displayFrom,
                                            to: displayTo,
                                            tempStart,
                                            tempEnd,
                                        }
                                    )

                                    return (
                                        <S.MonthDay
                                            key={i}
                                            className={`
                                                ${isWeekend ? 'weekend' : ''}
                                                ${isCurrent ? 'current' : ''}
                                                ${classes.isInSelectedPeriod ? 'in-period' : ''}
                                                ${classes.isPeriodBoundary ? 'period-boundary' : ''}
                                                ${classes.isInTempPeriod ? 'in-temp-period' : ''}
                                                ${classes.isTempBoundary ? 'temp-boundary' : ''}
                                            `.trim()}
                                            onClick={() =>
                                                handleDateClick(
                                                    day.number,
                                                    monthIndex
                                                )
                                            }
                                        >
                                            {day.number}
                                        </S.MonthDay>
                                    )
                                })}
                            </S.MonthDaysGrid>
                        </S.MonthContainer>
                    )
                })}
            </S.CalendarScrollable>

            {/* Кнопка применения — только на мобильных */}
            <S.CalendarFooter>
                <S.CalendarBtn
                    onClick={handleApplyPeriod}
                    disabled={!tempStart || !tempEnd}
                >
                    Выбрать период
                </S.CalendarBtn>
            </S.CalendarFooter>
        </S.CalendarContainer>
    )
}

export default Calendar
