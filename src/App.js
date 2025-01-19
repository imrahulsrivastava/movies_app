import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import "./App.css";
import Error from "./Error";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;