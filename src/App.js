import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { GalContext } from './context/GalContext.js';
import Galeria from './components/Galeria.js';

function App() {
  const { kutyaLISTA } = useContext(GalContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <article>

      </article>
      <article>
        <Galeria lista = {kutyaLISTA} />
      </article>
      <footer>
        2024 - Szabó-Mester Alex
      </footer>
    </div>
  );
}

export default App;
