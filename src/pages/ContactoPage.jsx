export const ContactoPage = () => {
    return (
        <section className="container">
            <h1>Contacto</h1>
            <form action="" className="form">
                <p type="Name:"><input placeholder="Nombre"></input></p>
                <p type="Email:"><input placeholder="Correo"></input></p>
                <p type="Message:"><input placeholder="Mensaje"></input></p>
                <button className="button__form">Enviar Mensaje</button>
            </form>
        </section>
    );
}