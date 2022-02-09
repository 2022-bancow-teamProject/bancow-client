import { createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
  isDark: boolean;
}

const themeSlice = createSlice({
  name: "theme",
  initialState: { isDark: false } as DarkModeState,
  reducers: {
    change(state) {
      state.isDark = !state.isDark;
    }
  }
});
export const { change } = themeSlice.actions;
export default themeSlice.reducer;
