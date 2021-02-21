import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Sintaxis de un Label en JSX */}
        <label htmlFor="name">Nombre: </label>

        <input id="name" type="text" />

        <p>
          Hola me llamo <code>Daniel Canaviri</code> y te doy la bienvenida al maravilloso mundo de REACT!!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
    </div>
  );
}

export default App;
