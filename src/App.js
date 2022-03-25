import "./App.css";

import registerstaff from "./pages/RegisterStaff/RegisterStaff";
import registermemberstaff from "./pages/RegisterMemberStaff/RegisterMemberStaff";
import listpersonstaff from "./pages/ListPersonStaff/ListPersonStaff";
import listplayer from "./pages/ListPlayer/ListPlayer";
import registerfile from "./pages/RegisterFile/RegisterFile";
import index from "./pages/Index/Index";

import { Route } from "wouter";

export default function App() {
	return (
		<div className="App">
			<Route path="/" component={index} />
			<Route path="/registrar-cuerpo-tecnico" component={registerstaff} />
			<Route path="/registrar-ficha-jugador" component={registerfile} />
			<Route
				path="/registrar-integrante-cuerpo-tecnico"
				component={registermemberstaff}
			/>
			<Route
				path="/listar-integrantes-cuerpo-tecnico"
				component={listpersonstaff}
			/>
			<Route path="/listar-jugadores" component={listplayer} />
		</div>
	);
}
