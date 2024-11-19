
import image1 from '../assets/images/foto_1.jpg';
import image2 from '../assets/images/foto_2.jpg';

export const FotosPage = () => {
    return (
        <section className="container">
            <h1 className="title">Fotos</h1>
            <div className="photos">
                <img src={image1}
                     className="photo"
                     height={300}
                     width={300}
                     alt=""/>

                <img src={image2}
                     className="photo"
                     height={300}
                     width={300}
                     alt=""/>
            </div>
        </section>
    );
}