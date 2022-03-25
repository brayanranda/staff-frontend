export default function ModalJugador({ statemodal }) {
	return (
		<div
			className={`modal ${
				statemodal ? "modal-active" : ""
			} bg-white rounded-md shadow-2xl px-5 py-6 z-10`}
		>
			<ul className="">
				<li className="p-3 flex items-center rounded-lg hover:bg-gray-50">
					<i class="fas fa-futbol text-yellow-500"></i>
					<a className="ml-4 text-gray-500" href="/registrar-ficha-jugador">
						Crear ficha jugador
					</a>
				</li>
				<li className="p-3 flex items-center rounded-lg hover:bg-gray-50">
					<i class="fas fa-book-open text-yellow-500"></i>
					<a className="ml-4 text-gray-500" href="/listar-jugadores">
						Listar jugadores
					</a>
				</li>
			</ul>
		</div>
	);
}
