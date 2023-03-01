import '../App.css';
import React from 'react';
import Home from './Home';
import CharitiesPage from './CharitiesPage';
import {Routes,Route,} from 'react-router-dom';
import NavBar from './Navbar';
import Donations from './Donations';
function App() {
    
  return (
    <div>
      <div className = "App">
    <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "CharitiesPage" element = {<CharitiesPage/>} />
    </Routes>
  </div>             
      <CharitiesPage />  
      <Donations />       
    </div>
  );
}

export default App;