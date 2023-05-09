import { createStore } from "redux";

export const addtodo = e => {
  return { type: "add", text: e };
}

export const deltodo = e => {
  return { type: "del", id: e };
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [{ text: action.text, id: Date.now() }, ...state];
    case "del":
      return state.filter(e => e.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;