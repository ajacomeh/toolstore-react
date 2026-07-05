function Statistics() {

    const stats = [

        {
            number: "3500+",
            text: "Clientes Satisfechos"
        },

        {
            number: "250+",
            text: "Herramientas"
        },

        {
            number: "98%",
            text: "Pedidos Entregados"
        },

        {
            number: "12",
            text: "Años de Experiencia"
        }

    ];

    return (

        <section className="statistics">

            <h2>📊 Nuestra Trayectoria</h2>

            <div className="stats-grid">

                {stats.map((item, index) => (

                    <div
                        className="stat-card"
                        key={index}
                    >

                        <h3>{item.number}</h3>

                        <p>{item.text}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Statistics;