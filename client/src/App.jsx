import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"; // Uppercase component name
import Home from "./Components/Home";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Login from "./Components/Login";

const App = () => {
    return (
      <Router>
        <Navbar /> {/* Uppercase component name */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/login" element={<Login />} /> {/* Use Login component */}
        </Routes>
      </Router>
    );
};

export default App;
