import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface IPatnState {
  value: string[]
}

// Define the initial state using that type
const initialState: IPatnState = {
  value: document.location.pathname === "/" ? [""] : document.location.pathname.split("/"),
}

export const path = createSlice({
  name: 'patn',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value.push(action.payload);
    },
    decrement: (state) => {
      state.value.pop();
    },
  },
})

export const { increment, decrement } = path.actions

// Other code such as selectors can use the imported `RootState` type
export const pathRouter = (state: RootState) => state.path

export default path.reducer