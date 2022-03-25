import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import CrearCuerpoTecnico from "../../components/CrearCuerpoTecnico/CrearCuerpoTecnico";

export default function RegisterStaff () {
    return (
        <>
            <Header />
            <main className="">
                <CrearCuerpoTecnico />
            </main>
            <Footer />
        </>
    );
}