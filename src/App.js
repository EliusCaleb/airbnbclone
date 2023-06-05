
import './App.css';
import React from 'react'
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './searchpage/SearchPage';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

         {/* home  of app  */}
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<SearchPage/>}/>
          </Routes>
          
          <Footer/>
    
    </div>
  );
}

export default App;
