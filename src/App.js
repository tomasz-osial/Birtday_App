import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Gallery from "./components/Gallery/gallery";



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Gallery />
    </div>
  );
}

export default App;
