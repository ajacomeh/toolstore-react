function BestSellers() {

    const products = [

        {
            name: "Taladro Bosch",
            sales: "Más de 520 ventas",
            image:
                "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80"
        },

        {
            name: "Martillo Stanley",
            sales: "Más de 470 ventas",
            image:
                 "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            name: "Caja de Herramientas",
            sales: "Más de 410 ventas",
            image:
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
        }

    ];

    return (

        <section className="best-sellers">

            <h2>⭐ Productos Más Vendidos</h2>

            <p>
                Estas son las herramientas favoritas de nuestros clientes.
            </p>

            <div className="cards">

                {products.map((item, index) => (

                    <div className="card" key={index}>

                        <img
                            src={item.image}
                            alt={item.name}
                        />

                        <h3>{item.name}</h3>

                        <p>{item.sales}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default BestSellers;