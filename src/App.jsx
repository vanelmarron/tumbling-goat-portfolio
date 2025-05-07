import "./App.scss";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage"


function App() {


  return (

    <BrowserRouter>
      <Header  />
      <Routes>
      <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
