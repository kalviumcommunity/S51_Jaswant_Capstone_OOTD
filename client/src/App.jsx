import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"; 
import Home from "./Components/Home";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Login from "./Components/Login";
import Signup from "./Components/Signup"

const App = () => {
    return (
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    );
};

export default App;
