import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import WorkWithUs from './pages/WorkWithUs';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState('/');

  return (
    <BrowserRouter>
      <Header current={current} setCurrent={setCurrent} />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
