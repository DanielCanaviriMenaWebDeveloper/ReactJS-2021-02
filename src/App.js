import React from 'react';
import logo from "./logo.svg";
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<section>

					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</section>
				
				<section>
					<Componente msg = "Hola este es un mensaje desde el componente Padre" />

					<hr />
					{/* Definiendo distintos tipos de atributos que seran enviados al componente dentro 
					el objeto props*/}
					<Propiedades cadena = "Esto es un String" numero = { 19 } boolean = { false }/>
				</section>
			</header>

		</div>
	);
}

export default App;
