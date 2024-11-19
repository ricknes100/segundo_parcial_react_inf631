import Navbar from "./Navbar";

import escudo from '../assets/images/escudo.png';
import Slider from "./Slider/Slider";

const Header = () => {
    return (
        <header className="header">
            <div className="topbar">
                <img src={escudo} alt="" className="topbar__logo"/>
                <div className="topbar__text">
                    <h1 className="topbar__title">COLEGIO ALTERNATIVO</h1>
                    <p className="topbar__subtitle">COLEGIO ALTERNATIVO PRUEBA</p>
                </div>
            </div>

            <Slider />

            <Navbar />

            <div className="nav__button" id="nav-button-menu">
                <i className='bx bx-menu'></i>
                Menu
            </div>
        </header>
    );
}

export default Header;