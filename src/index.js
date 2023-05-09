import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
// import { createStore } from "redux";
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const reducer = (arr = [], action) => {
//   switch (action.type) {
//     case "add":
//       const a = { text: action.text, id: Date.now() }
//       return [a, ...arr];
//     case "del":
//       return arr.filter(e => e.id !== action.id);
//     default:
//       return arr;
//   }
// }
// const store = createStore(reducer);

// store.subscribe(e => {
//   console.log(store.getState());
//   const todos = store.getState();
//   ul.innerHTML = '';
//   todos.forEach(e => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.id = e.id;
//     btn.addEventListener("click", e => {
//       console.log(e.target.parentNode.id);
//       store.dispatch({ type: "del", id: parseInt(e.target.parentNode.id) });
//     });
//     li.id = e.id;
//     li.innerText = e.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// });

// const onsubmit = e => {
//   e.preventDefault();
//   store.dispatch({ type: "add", text: input.value });
//   input.value = "";
// }
// form.addEventListener("submit", onsubmit);


// function asdf() {
//   const plus = document.getElementById("plus");
//   const minus = document.getElementById("minus");
//   const value = document.getElementById("value");

//   const add = "add";
//   const minuss = "minus";
//   const reducer = (cnt = 0, action) => {
//     switch (action.type) {
//       case add:
//         cnt++;
//         break;
//       case minuss:
//         cnt--;
//         break;
//       default:
//     }
//     console.log(cnt);
//     return cnt;
//   };

//   const store = createStore(reducer);

//   const onchange = e => {
//     value.innerText = store.getState();
//   }
//   store.subscribe(onchange);

//   plus.addEventListener("click", e => {
//     store.dispatch({ type: add });
//   });

//   minus.addEventListener("click", e => {
//     store.dispatch({ type: minuss });
//   });
// }