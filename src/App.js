import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Quiz from "./components/Events/Quiz";
import Debate from "./components/Events/Debate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-register" element={<Quiz />} />
        <Route path="/debate-register" element={<Debate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
