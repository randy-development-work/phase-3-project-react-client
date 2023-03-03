import '../App.css';
import React from 'react';
import Home from '../components/Home';
import CharitiesPage from '../components/CharitiesPage';
import {Routes,Route,} from 'react-router-dom';
import NavBar from '../components/Navbar';
import Donations from '../components/Donations';
import About from '../components/About'
function App() {
    
  return (
    <div>
      <div className = "App">
    <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "CharitiesPage" element = {<CharitiesPage/>} />
       <Route exact path = "Donations" element = {<Donations/>} />
       <Route exact path = "About" element ={<About/>} />
    </Routes>
  </div>             
      <CharitiesPage />       
    </div>
  );
}

export default App;