import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import CrearIntegrante from "../../components/CrearIntegrante/CrearIntegrante";


export default function RegisterMemberStaff() {
    return (
        <>
            <Header />
            <main className="">
                <CrearIntegrante />
            </main>
            <Footer />
        </>
    );
}