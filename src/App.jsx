import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import TarifsDetail from './pages/TarifsDetail';

// Pages détaillées des services
import PunaiseDetail from './pages/PunaiseDetail';
import CafardDetail from './pages/CafardDetail';
import RatDetail from './pages/RatDetail';
import AcariensDetail from './pages/AcariensDetail';
import DetectionCanineDetail from './pages/DetectionCanineDetail';
import PigeonDetail from './pages/PigeonDetail';
import GuepeDetail from './pages/GuepeDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarifs" element={<TarifsDetail />} />

      {/* Pages de services */}
      <Route path="/service/punaises-de-lit" element={<PunaiseDetail />} />
      <Route path="/service/cafards-blattes" element={<CafardDetail />} />
      <Route path="/service/rats-souris" element={<RatDetail />} />
      <Route path="/service/acariens" element={<AcariensDetail />} />
      <Route path="/service/detection-canine" element={<DetectionCanineDetail />} />
      <Route path="/service/pigeons" element={<PigeonDetail />} />
      <Route path="/service/nid-de-guepes" element={<GuepeDetail />} />
    </Routes>
  );
}

export default App;
