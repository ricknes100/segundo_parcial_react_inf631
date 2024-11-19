const SliderItem = ({ title, description }) => {
    return (
        <div className="slider__item">
            <h2 className="slider__name">{ title }</h2>
            <p className="slider__paragraph">
                { description }
            </p>
        </div>
    );
}

export default SliderItem;