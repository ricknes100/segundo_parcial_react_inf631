import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/principal"
                             className="nav__link">
                        Principal
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/institucional"
                             className="nav__link">
                        Institucional
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/fotos"
                             className="nav__link">
                        Fotos
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/inscripciones"
                             className="nav__link">
                        Inscripciones 2021
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/cuotas"
                             className="nav__link">
                        Cuotas 2021
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/contacto"
                             className="nav__link">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;