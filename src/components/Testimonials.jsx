function Testimonials() {

    const testimonials = [

        {
            name: "Carlos Pérez",
            comment:
                "Excelente atención y herramientas de gran calidad."
        },

        {
            name: "María López",
            comment:
                "Mi pedido llegó antes de lo esperado. Muy recomendado."
        },

        {
            name: "José Herrera",
            comment:
                "La mejor tienda para comprar herramientas profesionales."
        }

    ];

    return (

        <section
            className="testimonials"
            id="opiniones"
        >

            <h2>💬 Opiniones de Nuestros Clientes</h2>

            <div className="cards">

                {testimonials.map((item, index) => (

                    <div
                        className="testimonial-card"
                        key={index}
                    >

                        <h3>⭐⭐⭐⭐⭐</h3>

                        <p>

                            "{item.comment}"

                        </p>

                        <h4>

                            {item.name}

                        </h4>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Testimonials;