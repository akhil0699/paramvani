import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaticPage from './components/StaticPage';
import SlidesPage from './components/SlidesPage';
import ParticlesPage from './components/ParticlesPage';
import TalkPage from './components/TalkPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ParticlesPage />} />
          <Route path="/static" element={<StaticPage />} />
          <Route path="/slides" element={<SlidesPage />} />
          <Route path="/talk" element={<TalkPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;