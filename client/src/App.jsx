import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
