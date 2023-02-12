import './App.css';

import { Route, Routes } from 'react-router-dom';

import { CarApp } from './pages/car-app';
import { HeaderApp } from './cmps/car-header';

function App() {
  return (
    <section className="App">
      <Route>

        <HeaderApp />
        <CarApp />
      </Route>

    </section>
  );
}

export default App;
