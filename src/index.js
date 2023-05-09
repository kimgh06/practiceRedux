// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );
import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const value = document.getElementById("value");

const reducer = (cnt = 0, action) => {
  switch (action.type) {
    case "add":
      cnt++;
      break;
    case "minus":
      cnt--;
      break;
    default:
  }
  return cnt;
};

const store = createStore(reducer);
store.dispatch({ type: "add" });

console.log(store.getState());