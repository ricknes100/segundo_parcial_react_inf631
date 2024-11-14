import Navbar from "./Navbar";

import escudo from '../assets/images/escudo.png';
import slider1 from '../assets/images/slider-nivel-inicial.jpg';

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
            <div className="slider">
                <div className="slider__container">
                    <img src={slider1} alt="fondo" className="slider__img"/>
                    <div className="slider__data">
                        <h2 className="slider__title">Nivel Inicial</h2>
                        <p className="slider__description">
                            Hacia una escuela inclusiva, <br/>
                            educando en valores
                        </p>
                    </div>
                </div>
                <div className="slider__nav">
                    <div className="slider__item">
                        <h2 className="slider__name">Nivel Inicial</h2>
                        <p className="slider__paragraph">
                            Educando en valores
                        </p>
                    </div>

                    <div className="slider__item">
                        <h2 className="slider__name">Nivel Primario</h2>
                        <p className="slider__paragraph">
                            Educando en valores
                        </p>
                    </div>

                    <div className="slider__item">
                        <h2 className="slider__name">Nivel Secundario</h2>
                        <p className="slider__paragraph">
                            Educando para pensar
                        </p>
                    </div>

                    <div className="slider__item">
                        <h2 className="slider__name">Nivel C.E.N.S</h2>
                        <p className="slider__paragraph">
                            Terminar los estudios secundarios
                        </p>
                    </div>
                </div>
            </div>

            <Navbar />

            <div className="nav__button" id="nav-button-menu">
                <i className='bx bx-menu'></i>
                Menu
            </div>
        </header>
    );
}

export default Header;