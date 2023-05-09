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

const add = "add";
const minuss = "minus";
const reducer = (cnt = 0, action) => {
  switch (action.type) {
    case add:
      cnt++;
      break;
    case minuss:
      cnt--;
      break;
    default:
  }
  console.log(cnt);
  return cnt;
};

const store = createStore(reducer);

const onchange = e => {
  value.innerText = store.getState();
}
store.subscribe(onchange);

plus.addEventListener("click", e => {
  store.dispatch({ type: add });
});

minus.addEventListener("click", e => {
  store.dispatch({ type: minuss });
});