import {Navigate, Route, Routes} from "react-router-dom";

import PrincipalPage from "../pages/PrincipalPage";
import {ContactoPage} from "../pages/ContactoPage";
import {InstitucionalPage} from "../pages/InstitucionalPage";
import {FotosPage} from "../pages/FotosPage";
import {InscripcionesPage} from "../pages/InscripcionesPage";
import {CuotasPage} from "../pages/CuotasPage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="principal" element={<PrincipalPage/>}/>
                <Route path="institucional" element={<InstitucionalPage/>}/>
                <Route path="fotos" element={<FotosPage/>}/>
                <Route path="inscripciones" element={<InscripcionesPage/>}/>
                <Route path="cuotas" element={<CuotasPage/>}/>
                <Route path="contacto" element={<ContactoPage/>}/>
                <Route path="/" element={<Navigate to="/principal"/>}/>
            </Routes>
        </>
    )
}