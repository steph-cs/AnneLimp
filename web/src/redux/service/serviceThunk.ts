import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Service } from './types.ts'

const apiUrl = import.meta.env.VITE_API_URL

export const GetServices = createAsyncThunk<
  Service[],
  void,
  {
    state: RootState
    rejectValue: string
  }
>('service/GetServices', async (_, { rejectWithValue }) => {
  try {
    const url = new URL(`${apiUrl}/service`)
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error('Failed to get services')
    }
    const services = await response.json()
    return services
  } catch (error) {
    return rejectWithValue('Failed to get services: ' + error)
  }
})
