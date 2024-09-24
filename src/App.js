// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import Kadernictvi from './pages/Kadernictvi';
import Kozmetika from './pages/Kozmetika';
import Aboutus from './pages/Aboutus';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth); // Aktualizuje stav pri zmene veľkosti okna
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // <BrowserRouter key={windowSize}>
    <HashRouter key={windowSize}>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kadernictvi" element={<Kadernictvi />} />
          <Route path="/kozmetika" element={<Kozmetika />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default App;
