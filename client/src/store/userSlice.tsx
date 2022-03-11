import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store';

interface UserState {
  id?: number,
  name?: string
}

const initialState: UserState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  }
})

export const { setName: setUserName, setId: setUserId } = userSlice.actions

export const userState = (state: RootState) => state.user;

export default userSlice.reducer
