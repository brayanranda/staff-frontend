import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function FormRegistrar() {
	const [data, setData] = useState({});

	const MySwal = withReactContent(Swal);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await fetch(
			"https://api-micro-staff.herokuapp.com/cuerpo_tecnico/guardar",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		).then((res) => res.json());
		if (resp.error) {
		} else {
			MySwal.fire({
				icon: "success",
				title: "Éxito!",
				text: "Todo ha salido correctamente!",
				didOpen: () => {
					MySwal.clickConfirm();
				},
			}).then(() => {
				return MySwal.fire({
					icon: "success",
					title: "Éxito!",
					text: "Todo ha salido correctamente!",
				});
			});
		}
	};

	return (
		<form
			class="mt-8 mb-12 shadow-2xl w-4/5 mx-auto max-w-xl py-12 px-12"
			onSubmit={handleSubmit}
		>
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
						placeholder="Ingrese el nombre del cuerpo técnico"
						onChange={handleChange}
						name="nombre"
					/>
					<p className="text-red-500 text-xs italic hidden">
						Please fill out this field.
					</p>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						Equipo
					</label>
					<div className="relative">
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
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-2">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-city"
					>
						Fecha <br /> contratación
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-city"
						type="date"
						onChange={handleChange}
						name="fecha_contratacion"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						Terminación <br /> contrato
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-city"
						type="date"
						onChange={handleChange}
						name="terminacion_contrato"
					/>
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
