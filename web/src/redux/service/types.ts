interface ServicePrice {
  price: number
  duration: number
}

interface Description {
  title: string
  description: string
  activities: string[]
}

export interface Service {
  _id: string
  type: string
  description: Description
  price: ServicePrice[]
}

export interface ServiceSliceProps {
  services: Service[]
  message: string | null
  type: string | null
  request: string | null
}
