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
import ForgotPassword from './Components/ForgotPassword';
import { BirthdayParties } from './Components/BirthdayParties';
import { Office } from './Components/Office';
import { Interview } from './Components/Interview';
import { College } from './Components/College';


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
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/BirthdayParties" element={<BirthdayParties/>}/>
          <Route path='/Office' element={<Office/>}/>
          <Route path='/Interview' element={<Interview/>}/>
          <Route path='/College' element={<College/>}/>
        </Routes>
        <Footer />
      </Router>
    );
};

export default App;
