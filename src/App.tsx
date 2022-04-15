import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from './screens/home';
import { Detail } from './screens/detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Link to="/">Home</Link>
      <Link to="/detail/1">Detail</Link>
    </div>
  );
}

export default App;
