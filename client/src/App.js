import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './app.css';
import Cards from './components/Cards';
import Formulario from './components/Formulario';
import Details from './components/Details';
import Header from './components/Header';
// import Login from './components/Login';

function App() {
  return (
    <>
    <Header />
    {/* <Login /> */}
    {/* <Cards/> */}
       <Router>
       <Routes>
         <Route path='/:id' element = { <Details/>}/> 
         <Route path='/' element = { <Cards /> } />
         <Route path='/add' element = { <Formulario /> } />
       </Routes>
     </Router>
    </>
    );
}
  
export default App;
