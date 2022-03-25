import { useEffect, useState } from "react";
import SweetAlert from "sweetalert-react";

export default function FormRegistrar() {
	const [data, setData] = useState({});
	const [listaTipoIntegrantes, setListaTipoIntegrantes] = useState([]);
	const [listaCuerpoTecnico, setListaCuerpoTecnico] = useState([]);
	const [idEquipo, setIdEquipo] = useState(undefined);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const getlistaTipoIntegrantes = async () => {
			const res = await listarTipoIntegrantes();
			if (!res.error) {
				setListaTipoIntegrantes(res);
			}
		};
		getlistaTipoIntegrantes();
	}, []);

	useEffect(() => {
		const getlistaCuerpoTecnicos = async () => {
			const res = await listarCuerpoTecnicos();
			if (!res.error) {
				setListaCuerpoTecnico(res);
			}
		};
		const listarCuerpoTecnicos = async () => {
			const resp = await fetch(
				`https://api-micro-staff.herokuapp.com/cuerpo_tecnico/listar_por_equipo/${idEquipo}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then((res) => res.json());
			return resp;
		};
		if (idEquipo) {
			getlistaCuerpoTecnicos();
		}
	}, [idEquipo]);

	const listarTipoIntegrantes = async () => {
		const resp = await fetch(
			"https://api-micro-staff.herokuapp.com/tipo_integrante/listar",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then((res) => res.json());
		return resp;
	};

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await fetch(
			"https://api-micro-staff.herokuapp.com/integrante_cuerpo_tecnico/guardar",
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
			class="mt-8 mb-12 shadow-2xl w-4/5 mx-auto max-w-xl py-12 px-12"
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
				text="Integrante registrado correctamente :)"
				onConfirm={() => setSuccess(false)}
			/>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Equipo
					</label>
					<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={(e) => setIdEquipo(e.target.value)}
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
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Nombre
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Nombre integrante cuerpo técnico"
						onChange={handleChange}
						name="nombres"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
						name="email"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Tipo sangre
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
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Tipo integrante
					</label>
					<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={handleChange}
						name="id_tipo"
					>
						<option value="">Seleccione una opción</option>
						{listaTipoIntegrantes.map((el, pos) => (
							<option value={el.id} key={pos}>
								{el.nombre}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Cuerpo ténico
					</label>
					<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={handleChange}
						name="id_cuerpo_tecnico"
					>
						<option value="">Seleccione una opción</option>
						{listaCuerpoTecnico.map((el, pos) => (
							<option value={el.id} key={pos}>
								{el.nombre}
							</option>
						))}
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
