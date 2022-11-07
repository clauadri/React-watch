import './App.css';
import CuentaAtras from './components/CuentaAtras';
import DigitalClock from './components/DigitalClock';
import Cronometro from './components/Cronometro';
function App() {
  return (
    <div className="App">
      <DigitalClock/>
      <CuentaAtras/>
      <Cronometro/>
    </div>
  );
}

export default App;
