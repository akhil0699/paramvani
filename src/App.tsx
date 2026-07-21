import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StaticPage from './components/StaticPage';
import SlidesPage from './components/SlidesPage';
import ParticlesPage from './components/ParticlesPage';
import ChooseLordPage from './components/ChooseLordPage';
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
          <Route path="/choose" element={<ChooseLordPage />} />
          <Route path="/talk/:lordId" element={<TalkPage />} />
          <Route path="/talk" element={<Navigate to="/choose" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;