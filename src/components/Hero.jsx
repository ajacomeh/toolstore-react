function Hero() {
    return (
        <section
            className="hero"
            id="inicio"
        >
            <div className="overlay">
                <span className="version">
                    🚀 NUEVA VERSIÓN 2.0
                </span>

                <h1>
                    ToolStore PRO
                </h1>

                <p>
                    Todo lo que necesitas para tus proyectos de construcción,
                    carpintería, electricidad y mantenimiento, con productos de
                    las mejores marcas del mercado.
                </p>

                <div className="hero-buttons">
                    <a
                        href="#productos"
                        className="btn-primary"
                    >
                        Ver Catálogo
                    </a>

                    <a
                        href="#"
                        className="btn-secondary"
                    >
                        Descargar Catálogo
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;