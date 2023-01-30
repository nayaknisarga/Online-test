import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./components/Mainpage";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Graph from "./components/Graph";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Question1" element={<Question1 />} />
          <Route path="/Question2" element={<Question2 />} />
          <Route path="/Question3" element={<Question3 />} />
          <Route path="/Question4" element={<Question4 />} />
          <Route path="/Question5" element={<Question5 />} />
          <Route path="/Graph" element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
