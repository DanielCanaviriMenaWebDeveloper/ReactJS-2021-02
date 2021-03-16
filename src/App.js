import React from 'react';
import logo from "./logo.svg";
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import "./App.css";
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizandoElementos from './components/RenderizandoElementos';
import { EventosConParametros, EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';

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
					<Componente msg="Hola este es un mensaje desde el componente Padre" />
					<hr />
					{/* Definiendo distintos tipos de atributos que seran enviados al componente dentro 
					el objeto props*/}
					<Propiedades
						cadena="Esto es un String"
						numero={19}
						boolean={false}
						arreglo={[1, 2, 3, 4, 5, 6]}
						objeto={{
							nombre: "Daniel",
							edad: 37,
							profesion: "Ingeniero de Sistemas",
						}}
						funcion={(num) => num * num}
						elementoReact={<i>Esto es un elemento React</i>}
						componenteReact={
							<Componente msg="Soy un componente pasado como Propiedad" />
						}
						funcion2={function cuadrado(num) {
							return num + 5;
						}}
					/>
					<hr />
					<Estado />

					<hr />
					<RenderizadoCondicional />

					<hr />
					<RenderizandoElementos />

					<hr />
					<EventosES6 />

					<hr />
					<EventosES7 />

					<hr />
					<MasSobreEventos />

					<hr />
					<EventosConParametros />
				</section>
			</header>
		</div>
	);
}

export default App;
