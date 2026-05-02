import { createSlice } from '@reduxjs/toolkit';
import { getTheme, setTheme } from '../../utils/storage';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: getTheme(), // 'light' | 'dark'
    isLoading: false,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setTheme(state.theme);
    },
    setThemeMode(state, action) {
      state.theme = action.payload;
      setTheme(action.payload);
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleTheme, setThemeMode, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
