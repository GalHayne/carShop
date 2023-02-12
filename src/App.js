import './App.css';

import { Home } from './assets/css/pages/home';
import { About } from './assets/css/pages/about';

import {
  Route, Routes
} from 'react-router-dom';

import { CarApp } from './pages/car-app';
import { HeaderApp } from './cmps/car-header';

function App() {
  return (
    <section>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<CarApp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
  );
}

export default App;
