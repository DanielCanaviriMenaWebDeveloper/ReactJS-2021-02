import logo from "./logo.svg";
import "./App.css";

function App() {
	let nombre = 'Daniel';

	/* Simulemos un escenario de autenticación */
	let auth = true; /* Autenticación: false, usuario no autenticado */

	return (
		<>{/* Fragmentos */}
			<div className="App">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />

					{/* Sintaxis de un Label en JSX */}
					<label htmlFor="name">Nombre: </label>

					<input id="name" type="text" />

					<h1>Hola { nombre }</h1>

					{/* Operador ternario */}
					<p> { 	auth                             /* Condición */
							? 'El usuario esta logueado.'    /* Acción por verdad */
							: 'El usuario no esta logueado.' /* Acción por falsedad */
						}
					</p>

					<p>
						Hola me llamo <code>Daniel Canaviri</code> y te doy la
						bienvenida al maravilloso mundo de REACT!!!.
					</p>

					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Aprende React
					</a>
				</header>
			</div>

			<div>Hola { nombre } buenas noches.</div>
		</>
	);
}

export default App;
