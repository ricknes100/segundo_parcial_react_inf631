import SliderItem from "./SliderItem";
import sliderImg from "../../assets/images/slider-nivel-inicial.jpg";

const itemsSlider = [
    { title: 'Nivel Inicial', description: 'Educando en valores' },
    { title: 'Nivel Primario', description: 'Educando en valores' },
    { title: 'Nivel Secundario', description: 'Educando para pensar' },
    { title: 'Nivel C.E.N.S', description: 'Terminar los estudios secundarios' },
];

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__container">
                <img src={sliderImg} alt="fondo" className="slider__img"/>
                <div className="slider__data">
                    <h2 className="slider__title">Nivel Inicial</h2>
                    <p className="slider__description">
                        Hacia una escuela inclusiva, <br/>
                        educando en valores
                    </p>
                </div>
            </div>
            <div className="slider__nav">
                {
                    itemsSlider.map((item, index) => (
                        <SliderItem key={index}
                                    title={item.title}
                                    description={item.description} />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Slider;