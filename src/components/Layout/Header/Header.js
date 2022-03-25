import { useState } from "react";
import ModalCuerpoTecnico from "../../ModalCuerpoTecnico/ModalCuerpoTecnico";
import ModalJugador from "../../ModalJugador/ModalJugador";

export default function Header() {
    const [statemodal, setStatemodal] = useState(false)
    const [statemodal2, setStatemodal2] = useState(false)
    function showmodal() {
        if(!statemodal) {
            setStatemodal2(false)
        }
        setStatemodal(!statemodal)
    }
    function showmodal2() {
        if(!statemodal2) {
            setStatemodal(false)
        }
        setStatemodal2(!statemodal2)
    }

    return (
        <>
            <header className="relative z-10 shadow-md w-full py-4">
                <nav className="w-4/5 mx-auto flex flex-col md:flex-row justify-center items-center justify-between">
                    <span className="flex uppercase text-2xl font-black">
                        <p className="text-gray-900 mr-1">SINPLA</p>
                        <p className="text-yellow-500">FUT</p>
                    </span>
                    <ul className="flex flex-wrap mt-2 md:mt-0">
                        <li onClick={showmodal} className="flex mr-8 items-center cursor-pointer">
                            <p className="text-gray-500 mr-4 font-medium">Cuerpo técnico</p>
                            <i class="fas fa-angle-down text-gray-500"></i>
                        </li>
                        <li onClick={showmodal2} className="flex items-center cursor-pointer">
                            <p className="text-gray-500 mr-4 font-medium">Jugador</p>
                            <i class="fas fa-angle-down text-gray-500"></i>
                        </li>
                    </ul>
                </nav>
            </header>
            <ModalCuerpoTecnico statemodal={statemodal} />
            <ModalJugador statemodal={statemodal2} />
        </>
    );
}