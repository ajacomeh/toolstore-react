function Products() {

  const products = [
    {
      name: "Taladro Inalámbrico",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c"
    },

    {
      name: "Martillo Profesional",
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      name: "Sierra Circular",
      image:
        "https://images.unsplash.com/photo-1513467655676-561b7d489a88"
    },

    {
      name: "Juego de Destornilladores",
      image:
        "https://plus.unsplash.com/premium_photo-1683140705462-11ed388653cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="products" className="products">

      <h2>Herramientas Destacadas</h2>

      <div className="cards">

        {products.map((product,index)=>(
          <div key={index} className="card">

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Products;