import { useEffect, useRef, useState } from 'react'

interface DateRangePickerProps {
  checkIn: string
  checkOut: string
  onCheckInChange: (date: string) => void
  onCheckOutChange: (date: string) => void
  label?: string
}

const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

function toDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function toDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function monthDays(month: Date) {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1)
  const mondayOffset = (firstDay.getDay() + 6) % 7
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  const cells: Array<{ date: Date; inMonth: boolean }> = []

  for (let index = 0; index < mondayOffset; index += 1) {
    cells.push({
      date: new Date(month.getFullYear(), month.getMonth(), index - mondayOffset + 1),
      inMonth: false,
    })
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ date: new Date(month.getFullYear(), month.getMonth(), day), inMonth: true })
  }
  while (cells.length % 7 !== 0) {
    const lastDate = cells[cells.length - 1].date
    const nextDate = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1)
    cells.push({ date: nextDate, inMonth: false })
  }

  return cells
}

function formatSelectedDate(value: string) {
  if (!value) return 'Add date'
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(toDate(value))
}

function shiftMonth(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1)
}

export default function DateRangePicker({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  label = 'STAY DATES',
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false)
  const [firstMonth, setFirstMonth] = useState(() => startOfMonth(new Date()))
  const pickerRef = useRef<HTMLDivElement>(null)
  const todayKey = toDateKey(new Date())
  const secondMonth = shiftMonth(firstMonth, 1)
  const minMonth = startOfMonth(new Date())

  useEffect(() => {
    if (!open) return

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !pickerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const showPicker = () => {
    if (!open) {
      const selectedDate = checkIn ? toDate(checkIn) : new Date()
      const currentDate = new Date()
      const firstSelectableDate = selectedDate < new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
        ? currentDate
        : selectedDate
      setFirstMonth(startOfMonth(firstSelectableDate))
    }
    setOpen((currentlyOpen) => !currentlyOpen)
  }

  const selectDate = (date: Date) => {
    const value = toDateKey(date)
    if (!checkIn || checkOut || value <= checkIn) {
      onCheckInChange(value)
      onCheckOutChange('')
      return
    }

    onCheckOutChange(value)
    setOpen(false)
  }

  const renderMonth = (month: Date) => {
    const monthLabel = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(month)
    const days = monthDays(month)

    return (
      <div aria-label={monthLabel} className="calendar-month" key={monthLabel}>
        <h3>{monthLabel}</h3>
        <div className="calendar-grid calendar-grid--weekdays">
          {weekdays.map((day) => <span key={day}>{day}</span>)}
        </div>
        <div className="calendar-grid">
          {days.map(({ date, inMonth }) => {
            const dateKey = toDateKey(date)
            const isSelected = dateKey === checkIn || dateKey === checkOut
            const inRange = Boolean(checkIn && checkOut && dateKey > checkIn && dateKey < checkOut)
            const isDisabled = dateKey < todayKey
            const classes = [
              'calendar-day',
              !inMonth && 'calendar-day--outside',
              isSelected && 'calendar-day--selected',
              inRange && 'calendar-day--range',
              dateKey === todayKey && 'calendar-day--today',
              dateKey === checkIn && 'calendar-day--start',
              dateKey === checkOut && 'calendar-day--end',
            ].filter(Boolean).join(' ')

            return (
              <button
                aria-label={new Intl.DateTimeFormat('en', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                }).format(date)}
                aria-pressed={isSelected}
                className={classes}
                disabled={isDisabled}
                key={dateKey}
                onClick={() => selectDate(date)}
                type="button"
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={`date-picker${open ? ' date-picker--open' : ''}`} ref={pickerRef}>
      <span className="field-label">
        <i className="fa-regular fa-calendar" aria-hidden="true" /> {label}
      </span>
      <button
        aria-expanded={open}
        aria-haspopup="dialog"
        className="date-picker__trigger"
        onClick={showPicker}
        type="button"
      >
        <span className={checkIn ? '' : 'date-picker__placeholder'}>
          <small>ARRIVAL</small>
          <strong>{formatSelectedDate(checkIn)}</strong>
        </span>
        <i aria-hidden="true" className="fa-solid fa-arrow-right date-picker__arrow" />
        <span className={checkOut ? '' : 'date-picker__placeholder'}>
          <small>DEPARTURE</small>
          <strong>{formatSelectedDate(checkOut)}</strong>
        </span>
        <i aria-hidden="true" className="fa-regular fa-calendar-days date-picker__icon" />
      </button>
      {open && (
        <div aria-label="Choose your stay dates" className="calendar-popover" role="dialog">
          <div className="calendar-popover__toolbar">
            <div>
              <strong>Select your stay</strong>
              <span>{checkIn && checkOut ? 'Dates selected' : checkIn ? 'Now select your departure' : 'Choose your arrival date'}</span>
            </div>
            <div className="calendar-navigation">
              <button
                aria-label="Previous month"
                disabled={firstMonth <= minMonth}
                onClick={() => setFirstMonth((month) => shiftMonth(month, -1))}
                type="button"
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
              </button>
              <button
                aria-label="Next month"
                onClick={() => setFirstMonth((month) => shiftMonth(month, 1))}
                type="button"
              >
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="calendar-months">{renderMonth(firstMonth)}{renderMonth(secondMonth)}</div>
          <div className="calendar-popover__footer">
            <span><i aria-hidden="true" /> Available dates</span>
            <button onClick={() => setOpen(false)} type="button">DONE</button>
          </div>
        </div>
      )}
    </div>
  )
}
