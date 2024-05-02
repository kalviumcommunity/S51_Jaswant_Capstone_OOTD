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
import { Office } from './Components/office';
import { Interview } from './Components/Interview';
import { College } from './Components/College';
import { Wedding } from './Components/Wedding';
import { Relegious } from './Components/Relegious';
import { Casualout } from './Components/Casualout';
import { Dating } from './Components/Dating';
import { Black } from './Components/Combinations/Black';
import { White } from './Components/Combinations/White';
import { Red } from './Components/Combinations/Red';
import { Green } from './Components/Combinations/Green';
import { Blue } from './Components/Combinations/Blue';
import { Brown } from './Components/Combinations/Brown';
import { Saved } from './Components/Saved';
import { Pink } from './Components/Combinations/Pink';


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
          <Route path='/Wedding' element={<Wedding/>}/>
          <Route path='/Relegious' element={<Relegious/>}/>
          <Route path='/Casualout' element={<Casualout/>}/>
          <Route path='/Dating' element={<Dating/>}/>
          <Route path='/Black' element={<Black/>} />
          <Route path='/White' element={<White/>} />
          <Route path='/Red' element={<Red/>} />
          <Route path='/Green' element={<Green/>} />
          <Route path='/Blue' element={<Blue/>} />
          <Route path='/Brown' element={<Brown/>} />
          <Route path='/Pink' element={<Pink/>}/>
          <Route path='/Saved' element={<Saved/>}/>
          
        </Routes>
        <Footer />
      </Router>
    );
};

export default App;
