/* import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: {
    id: "",
  },
  reducers: {
    changeId(state) {
      return state.id + 1;
    },
  },
});

export let { changeId } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
 */

import { createStore, combineReducers } from "redux";

const idReducer = (state = "", action) => {
  switch (action.type) {
    case "Login":
      return (state = action.payload);
    case "Logout":
      return (state = "");
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    id: idReducer,
  })
);

export default store;
