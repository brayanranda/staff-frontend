export default function Footer() {
	return (
		<footer className="w-full bg-gray-700 py-14">
			<div className="mx-auto w-4/5 md:flex text-white">
				<div className="w-full md:w-2/3">
					<h3 className="text-3xl">
						Actualizaciones, <br /> Directo a su bandeja de entrada
					</h3>
					<label className="flex items-center mt-8" for="">
						<input
							className="w-96 outline-none bg-transparent border-2 border-white py-2 px-4 rounded-full mr-2"
							placeholder="Suscríbase en nuestra web!"
							type="text"
						/>
						<input
							className="text-black bg-yellow-500 hover:text-white hover:bg-black duration-300 cursor-pointer py-2 px-4 rounded-full"
							type="submit"
							value="Enviar"
						/>
					</label>
					<ul className="md:flex w-full mt-20">
						<li className="mr-8">
							<a className="font-bold hover:underline" href="www.google.com">
								Contacto
							</a>
						</li>
						<li className="mr-8">
							<a className="font-bold hover:underline" href="www.google.com">
								Terminos y condiciones
							</a>
						</li>
						<li>
							<a className="font-bold hover:underline" href="www.google.com">
								Politica de privacidad
							</a>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/3 md:border-l border-gray-300 md:pl-8 mt-12 md:mt-0">
					<h3 className="text-3xl">
						Siguenos: <br /> @sinplafut
					</h3>
					<div className="flex items-center mt-8 w-full">
						<a
							className="text-white flex items-center mr-8"
							target="_blank"
							href="www.google.com"
						>
							<i className="fab fa-instagram mr-2 text-2xl"></i>
							Instagram
						</a>
						<a
							className="text-white flex items-center"
							target="_blank"
							href="www.google.com"
						>
							<i className="fab fa-facebook mr-2 text-2xl"></i>
							Facebook
						</a>
					</div>
					<p className="text-gray-400 w-full mt-20">
						@2021 sinplafut. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
