import React from "react";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes basename="/React-movie">
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path={process.env.PUBLIC_URL} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
