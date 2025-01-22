import { useEffect, useState } from 'react'
import CalendarView, { CalendarEvent } from '../fragments/CalendarView'

export const apiUrl = import.meta.env.VITE_API_URL

interface PrecoDuracao {
  preco: number
  duracao: number
}

interface Descricao {
  titulo: string
  descricao: string
  atividades: string[]
}

interface Service {
  tipo: string
  descricao: Descricao
  precoDuracao: PrecoDuracao[]
}

interface Client {
  email: string
  senha: string
  nome: string
  sobrenome: string
  telefone: string
  endereco: {
    cep: string
    numero: string
    complemento: string
  }
  comodos: {
    quartos: number
    banheiros: number
    cozinhas: number
    salas: number
    varandas: number
    area_externa: number
  }
  pet: boolean
}

export interface BookingModel {
  service: Service
  client: Client
  data: Date
}

export default function Bookings() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [loading, setLoading] = useState(true)

  const formatEvents = (bookings: BookingModel[]) => {
    return bookings.map((booking) => ({
      title: booking.client.nome,
      start: new Date(booking.data),
      end: new Date(booking.data),
    }))
  }

  const getBookings = async () => {
    fetch(apiUrl + '/agendamentos')
      .then((response) => response.json())
      .then((json) => {
        setEvents(formatEvents(json))
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
      {loading ? <p>Loading</p> : <CalendarView events={events} />}
    </div>
  )
}
