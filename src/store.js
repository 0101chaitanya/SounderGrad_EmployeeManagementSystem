import { createSlice, configureStore, current } from '@reduxjs/toolkit';
import data from './data.json';

const initialState = {
  mocks: [...data.data],
  email: '',
  first_name: '',
  valid: false,
  admin: false,
};

export const globalSlice = createSlice({
  name: 'globalState',
  initialState:
    JSON.parse(localStorage.getItem('initialState')) ?? initialState,
  //michael.lawson@reqres.in  Michael
  reducers: {
    getUserContext(state, action) {
      const valid = state.mocks.find(
        (item) =>
          item.email === action.payload.email &&
          item.first_name === action.payload.first_name
      );

      if (valid) {
        state.first_name = valid.first_name;
        state.email = valid.email;
        state.valid = true;

        if (valid.admin) {
          state.admin = true;
        }
      }
      localStorage.setItem('initialState', JSON.stringify(current(state)));
      return state;
    },
    logout(state, action) {
      localStorage.removeItem('initialState');
      return initialState;
    },
  },
});

export const { getUserContext, logout } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;

export const store = configureStore({
  reducer: {
    globalState: globalReducer,
  },
});
