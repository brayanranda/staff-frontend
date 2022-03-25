import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import CrearFicha from "../../components/CrearFicha/CrearFicha";

export default function RegisterFile() {
    return(
        <>
            <Header />
            <main className="">
                <CrearFicha />
            </main>
            <Footer />
        </>
    );
}