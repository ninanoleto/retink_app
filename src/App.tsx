import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Services from './pages/OurServices/Services';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/retink_app" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
