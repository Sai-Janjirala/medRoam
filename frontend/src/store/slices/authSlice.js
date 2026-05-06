import { createSlice } from '@reduxjs/toolkit';
import { getToken, getUser, setToken, setUser, clearAll } from '../../utils/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getUser(),
    token: getToken(),
    isAuthenticated: !!getToken(),
  },
  reducers: {
    loginSuccess(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      setToken(token);
      setUser(user);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      clearAll();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
