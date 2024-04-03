import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"; 
import Home from "./Components/Home";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Mainpage from "./Components/Mainone";
import Footer from "./Components/Footer";

const App = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/Mainone" element={<Mainpage />} />
        </Routes>
        <Footer />
      </Router>
    );
};

export default App;
