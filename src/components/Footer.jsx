
import escudo from '../assets/images/escudo-colegio.png';
import map from '../assets/images/mapa.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={escudo} alt="escudo-colegio" className="footer__img"/>
            </div>
            <div className="footer__data">
                <ul>
                    <li>Nivel Inicial - Sala 3, 4 y 5 - Turno Mañana</li>
                    <li>Nivel Inicial - Sala 4 y 5 - Turno Tarde</li>
                    <li>Nivel Primario - 1 a 2 - Turno Mañana</li>
                </ul>
                <ul>
                    <li>Nivel Secundario y CENS</li>
                    <li>Av. España 22 - Ciudad de Potosí</li>
                    <li>Tel: (591) 622-4845</li>
                </ul>
                <ul>
                    <li>Administración</li>
                    <li>Celular: (591) 753-3346 (WhatsApp)</li>
                    <li>Personeria: 512/88</li>
                </ul>
            </div>

            <img src={map} alt="ubicacion" className="map"/>

            <div className="footer__menu">
                <h4>MENÚ</h4>
                <nav className="footer__nav">
                    <ul>
                        <li className="nav__item"><a href="#" className="nav__link">Principal</a></li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Institucional</a>
                            <ul>
                                <li><a href="#" className="nav__link">Propósitos</a></li>
                                <li><a href="#" className="nav__link">Objetivos institucionales</a></li>
                                <li><a href="#" className="nav__link">Reseña Histórica</a></li>
                            </ul>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Galería de Fotos</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Inscripciones 2021</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Cuotas 2021</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;