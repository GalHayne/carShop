import './App.css';

import { CarApp } from './pages/car-app';
import { HeaderApp } from './cmps/car-header';

function App() {
  return (
    <section className="App">
      <HeaderApp />
      <CarApp />
    </section>
  );
}

export default App;
