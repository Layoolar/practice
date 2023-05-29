import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  // Add any other relevant properties from the response
}

interface AuthenticationState {
  user: User | null;
  isAuthenticated: boolean;
  // Add any other relevant state properties
}

const initialState: AuthenticationState = {
  user: null,
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = action.payload !== null;
    },
    // Add any other reducers or actions you need
  },
});

export const { setUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
