import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { setUser, setError, logout } = userSlice.actions;

export default userSlice.reducer;
