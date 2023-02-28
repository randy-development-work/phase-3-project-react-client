import '../App.css';
import React from 'react';
import Home from './Home';
import CharitiesPage from './CharitiesPage';
import {Routes,Route,} from 'react-router-dom';
import NavBar from './NavBar';
import CharitiesPage from './CharitiesPage';

function App() {
    
  return (
    <div>
      <div className = "App">
    <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "charitiesPage" element = {<CharitiesPage/>} />
    </Routes>
  </div>         
      <CharitiesPage />         

    </div>
  );
}

export default App;
