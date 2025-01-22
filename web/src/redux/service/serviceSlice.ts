import { createSlice } from '@reduxjs/toolkit'
import { GetServices } from './serviceThunk.ts'
import { ServiceSliceProps } from './types.ts'

const initialState: ServiceSliceProps = {
  services: [],
  request: null,
  message: null,
  type: null,
}

export const ServiceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetServices.fulfilled, (state, action) => {
      state.request = 'success'
      state.services = action.payload
    })
    builder.addCase(GetServices.pending, (state) => {
      state.request = 'loading'
    })
    builder.addCase(GetServices.rejected, (state) => {
      state.request = 'rejected'
      state.message = 'Erro interno no servidor'
      state.type = 'error'
    })
  },
})

export default ServiceSlice.reducer
