import { useState } from "react";
import SweetAlert from "sweetalert-react";

export default function FormRegistrar() {
	const [data, setData] = useState({});
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await fetch(
			"https://api-micro-player.herokuapp.com/jugador/guardar",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		).then((res) => res.json());
		if (resp.error) {
			setError(true);
		} else {
			setSuccess(true);
		}
	};

	return (
		<form
			class="mt-8 mb-12 shadow-2xl mx-auto max-w-5xl py-12 px-12"
			onSubmit={handleSubmit}
		>
			<SweetAlert
				show={error}
				title="Error"
				text="Ha ocurrido un error :l"
				onConfirm={() => setError(false)}
			/>
			<SweetAlert
				show={success}
				title="Todo ha salido bien"
				text="Ficha registrado correctamente :)"
				onConfirm={() => setSuccess(false)}
			/>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Estado
					</label>
					<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={handleChange}
						name="estado"
					>
						<option value="">Seleccione un estado</option>
						<option value="1">Lesionado</option>
						<option value="2">Activo</option>
						<option value="3">Inactivo</option>
						<option value="4">Retirado</option>
					</select>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Documento
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="10901234567"
						onChange={handleChange}
						name="documento"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Nombres
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Nombre del jugador"
						onChange={handleChange}
						name="nombres"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Apellidos
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Peñaranda"
						onChange={handleChange}
						name="apellidos"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Email
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="email"
						placeholder="Correo electrónico"
						onChange={handleChange}
						name="correo"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Teléfono
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="number"
						placeholder="3157438902"
						onChange={handleChange}
						name="telefono"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Celular
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="number"
						placeholder="3157438902"
						onChange={handleChange}
						name="celular"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Fecha nacimiento
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="date"
						onChange={handleChange}
						name="fecha_nacimiento"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Dirección
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Calle 1 Avenida 2"
						onChange={handleChange}
						name="direccion"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Talla sudadera
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="M"
						onChange={handleChange}
						name="talla_sudadera"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Talla camiseta
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="M"
						onChange={handleChange}
						name="talla_camiseta"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Talla pantaloneta
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="M"
						onChange={handleChange}
						name="talla_pantaloneta"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Talla zapato deportivo
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="42"
						onChange={handleChange}
						name="talla_zapato"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Tipo de sangre
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="A positivo"
						onChange={handleChange}
						name="tipo_sangre"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Nivel de hemoglobina
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						onChange={handleChange}
						name="nivel_hemoglobina"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Consumo O2
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						onChange={handleChange}
						name="consumo_o2"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Nivel de lacteo en sangre
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						onChange={handleChange}
						name="nivel_lacteo"
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Equipo
					</label>
					<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={handleChange}
						name="id_equipo"
					>
						<option>Seleccione un equipo</option>
						<option value="1">Barcelona FC</option>
						<option value="2">Club Atletico de madrid</option>
						<option value="3">Bayern Munich</option>
						<option value="4">Borussia Dortmund</option>
						<option value="6">Lille Olympique</option>
						<option value="7">Paris Saint Germain FC</option>
					</select>
				</div>
			</div>
			<div class="flex items-center justify-between pt-4">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Registrar
				</button>
			</div>
		</form>
	);
}
