
import './App.css';
import React from 'react';
import './store/store.js';
import Add from './form.js';
import Display from './display.js';

import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">


         <Router>
          <div className='h'>
          <h1>DEMO on react-redux</h1>
          <div>
            <Link to="/display"> <button>Members</button></Link>
         
          </div>
          <div>
          <Link to="/addmember"> <button>Add</button></Link>
          </div>
         
          </div>
          <Routes>
            <Route path="/display" element={<Display/>}/>

            <Route path="/addmember" element={<Add/>}/>
          </Routes>


          </Router>
    </div>
  );
}

export default App;
