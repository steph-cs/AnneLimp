import moment from 'moment'
import 'moment/dist/locale/pt-br'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import '../assets/style/CalendarView.scss'

const localizer = momentLocalizer(moment)

export interface CalendarEvent {
  title: string
  start: Date
  end: Date
}

interface CalendarViewProps {
  events: CalendarEvent[]
}

export default function CalendarView(props: CalendarViewProps) {
  const { events } = props
  return (
    <div style={{ height: 800 }} className="my-12">
      <Calendar
        defaultDate={new Date()}
        events={events}
        localizer={localizer}
        max={localizer.endOf(new Date(), 'day')}
        min={localizer.startOf(new Date(), 'day')}
        showMultiDayTimes
        step={30}
      />
    </div>
  )
}
