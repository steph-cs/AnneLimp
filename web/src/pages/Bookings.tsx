import { useEffect, useState } from 'react'
import CalendarView from '../fragments/CalendarView'

const events = [
  {
    id: 1,
    title: 'Samantha',
    start: new Date(2024, 8, 17, 8, 0),
    end: new Date(2024, 8, 17, 17, 0),
  },
  {
    id: 2,
    title: 'Restaurante',
    start: new Date(2024, 8, 16, 11, 0),
    end: new Date(2024, 8, 16, 11 + 6, 0),
  },
  {
    id: 3,
    title: 'Silvana',
    start: new Date(2024, 8, 19, 8, 0),
    end: new Date(2024, 8, 19, 17, 0),
  },
]
export interface BookingModel {
  service_id: string
}

export default function Bookings() {
  const [bookings, setBookings] = useState<BookingModel[]>([])
  const [loading, setLoading] = useState(true)

  const getBookings = async () => {
    fetch('https://annelimp.onrender.com/agendamentos')
      .then((response) => response.json())
      .then((json) => {
        setBookings(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getBookings()
  }, [])

  return (
    <div className="">
      <h1 className="text-4xl font-bold">Agendamentos</h1>
      {loading ? <p>Loading</p> : <CalendarView events={bookings} />}
    </div>
  )
}
