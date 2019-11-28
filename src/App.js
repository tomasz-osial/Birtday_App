import React from 'react';
import WebFont from 'webfontloader';

import './App.css';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Gallery from "./components/Gallery/gallery";
import Calculator from "./components/Calculator/calculator";
import Footer from "./components/Footer/Footer";

WebFont.load({
    google: {
        families: ['Gloria Hallelujah', 'sans-serif']
    }
});

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Gallery />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
