// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //weather dark mode enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
    {/* <Router> */}
      {/* Navbar and TextForm use props */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4">
      {/* <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/"
          element={<TextForm heading="Enter the Text to Analyse" mode={mode} />}/>
        </Routes> */}
        <TextForm heading="Enter the Text to Analyse" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
