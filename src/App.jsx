import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Component/Menu";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/contact";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
    <Router>
      <Menu />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
};

export default App;
