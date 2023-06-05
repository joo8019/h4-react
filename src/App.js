import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home';
import Student from './student';
import Contactus from './contactus';
import "./navbar.css";



function App() {
  return (
    <div className='bgg'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
