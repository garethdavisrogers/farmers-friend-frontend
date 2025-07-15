import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CropInfoPage from './Components/CropInfoPage';
import AddNewCrop from './Components/AddNewCrop';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/my-crops" element={<MyCrops/>}/>
          <Route path="/crop-info-page" element={<CropInfoPage/>}/>
          <Route path="/add-new-crop" element={<AddNewCrop/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function Home()
{
  return (
    <div>
      <header>Welcome to Farmer's Friend!</header>
      <h3>An app for keeping track of your crops</h3>
      <Link to="/crop-info-page">Crop Info Page</Link>
      <Link to="/my-crops">My Crops</Link>
    </div>
  );
}

function MyCrops()
{
  return (
  <div>
    <h1>Coming soon</h1>
    <Link to="/">Return home</Link>
  </div>
  );
}

export default App;
