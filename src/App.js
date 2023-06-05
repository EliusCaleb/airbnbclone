
import './App.css';
import React from 'react'
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">

         {/* home  of app  */}
          <Header/>
          <Home/>
          <Footer/>
    
    </div>
  );
}

export default App;
