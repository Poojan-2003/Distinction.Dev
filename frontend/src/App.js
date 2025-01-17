import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Companies from './components/Companies';
import Jobs from './components/Job';
import Persons from './components/Person';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/persons">Persons</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/persons" element={<Persons />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;