import { useNavigate } from 'react-router-dom'
import DropdownSelect, { type DropdownOption } from './DropdownSelect'
import DateRangePicker from './DateRangePicker'
import { suites } from '../data/homepage'
import { useVillaStore } from '../store/useVillaStore'

export default function BookingCard() {
  const navigate = useNavigate()
  const {
    checkIn,
    checkOut,
    suiteId,
    adults,
    children,
    setCheckIn,
    setCheckOut,
    setSuiteId,
    setAdults,
    setChildren,
  } = useVillaStore()

  const checkRates = () => {
    if (!checkIn || !checkOut) {
      window.alert('Please choose your arrival and departure dates to continue.')
      return
    }

    if (new Date(`${checkOut}T00:00:00`) <= new Date(`${checkIn}T00:00:00`)) {
      window.alert('Departure must be after your arrival date.')
      return
    }

    navigate('/contact?tab=reservation')
  }

  const suiteOptions: DropdownOption[] = [
    ...suites.map((suite) => ({ label: suite.name, value: suite.id })),
    { label: 'Full Estate Buyout (4 Suites)', value: 'estate-buyout' },
  ]
  const adultOptions: DropdownOption[] = Array.from({ length: 10 }, (_, index) => {
    const count = index + 1
    return { label: `${count} adult${count === 1 ? '' : 's'}`, value: count }
  })
  const childOptions: DropdownOption[] = Array.from({ length: 6 }, (_, count) => ({
    label: `${count} ${count === 1 ? 'child' : 'children'}`,
    value: count,
  }))

  return (
    <div className="booking-wrap" id="booking-card">
      <form
        className="booking-card"
        onSubmit={(event) => {
          event.preventDefault()
          checkRates()
        }}
      >
        <div className="booking-grid">
          <div className="booking-field booking-field--date">
            <DateRangePicker
              checkIn={checkIn}
              checkOut={checkOut}
              onCheckInChange={setCheckIn}
              onCheckOutChange={setCheckOut}
            />
          </div>

          <div className="booking-field">
            <span className="field-label"><i className="fa-solid fa-hotel" aria-hidden="true" /> SUITE / VILLA</span>
            <DropdownSelect
              ariaLabel="Suite or villa"
              onChange={(value) => setSuiteId(String(value))}
              options={suiteOptions}
              value={suiteId}
            />
          </div>

          <div className="booking-field">
            <span className="field-label"><i className="fa-solid fa-user-group" aria-hidden="true" /> GUESTS</span>
            <div className="guest-controls">
              <DropdownSelect ariaLabel="Adults" onChange={(value) => setAdults(Number(value))} options={adultOptions} value={adults} />
              <DropdownSelect ariaLabel="Children" onChange={(value) => setChildren(Number(value))} options={childOptions} value={children} />
            </div>
          </div>

          <button className="button button--primary booking-submit" type="submit">
            CHECK RATES <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          </button>
        </div>
        <div className="booking-assurance">
          <span><i className="fa-solid fa-check" aria-hidden="true" /> DIRECT BEST RATE GUARANTEE</span>
          <span className="booking-assurance__right">
            Instant confirmation via PayHere Central Bank SSL
            <span className="availability-pill">4 suites available</span>
          </span>
        </div>
      </form>
    </div>
  )
}
