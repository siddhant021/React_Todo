import React from 'react'
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>
  )
}

export default App