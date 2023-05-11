import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

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

// const reducer = createReducer([], {
//   [addtodo]: (s, a) => {
//     s.unshift({ text: a.payload, id: Date.now() })
//   },
//   [deltodo]: (s, a) => s.filter(e => e.id !== a.payload),
// }); 

const slice = createSlice({
  name: 'slice',
  initialState: [],
  reducers: {
    addtodo: (s, a) => {
      s.unshift({ text: a.payload, id: Date.now() })
    },
    deltodo: (s, a) => s.filter(e => e.id !== a.payload),
  }
})
console.log(slice.reducer);

export const { addtodo, deltodo } = slice.actions;


export default configureStore({ reducer: slice.reducer });
