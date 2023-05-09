import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "../Routes/Detail";
import Home from "../Routes/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
