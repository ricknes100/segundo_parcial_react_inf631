import background from '../assets/images/fondo.jpg';
import iconoObjetivos from '../assets/images/icono-objetivos-home.png';
import iconoNiveles from '../assets/images/icono-niveles-home.png';

const PrincipalPage = () => {
    return (
        <section className="about">
            <img src={background} alt="fondo" className="about__wallpaper"/>
            <div className="about__container">
                <p className="about__message">
                    "Comprometidos con la sociedad y sus necesidades sociales, culturales y espirituales, a partir
                    de <br/>la educación
                    como herramienta de transformación"
                </p>
                <div className="about__data">
                    <div className="about__info">
                        <img src={iconoObjetivos} alt="objetivos" className="about__icon"/>
                        <h2 className="about__title">OBJETIVOS</h2>
                        <p className="about__description">
                            Entendemos que el soporte de la fé cristiana aporta a los valores morales y espirituales
                            que necesita nuestra sociedad y concebimos
                            a la educación como una herramienta de transformación humana y social idónea para lograr
                            ese propósito.
                        </p>
                    </div>
                    <div className="about__info">
                        <img src={iconoNiveles} alt="niveles" className="about__icon"/>
                        <h2 className="about__title">NIVELES</h2>
                        <p className="about__description">
                            Desde los más pequeños - NIVEL INICIAL - nos orientamos "hacia una escuela inclusiva,
                            que educa en valores": a los más grandes
                            - PRIMARIO y SECUNDARIO - los formamos "para pensar, pensar para actuar y actuar para
                            transformar". El nivel C.E.N.S promueve la terminalidad
                            de los estudios secundarios para insertarse en el campo laboral o continuar los estudios
                            universitarios.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrincipalPage;