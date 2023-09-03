import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {},
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = contactsSlice.actions

export default contactsSlice.reducer