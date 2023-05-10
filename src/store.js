import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const addtodo = createAction("add");
export const deltodo = createAction("del");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addtodo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deltodo.type:
//       return state.filter(e => e.id !== action.payload);
//     default:
//       return state;
//   }
// }

const reducer = createReducer([], {
  [addtodo]: (s, a) => {
    s.push({ text: a.payload, id: Date.now() })
  },
  [deltodo]: (s, a) => s.filter(e => e.id !== a.payload),
});

const store = createStore(reducer);

export default store;