import { useState } from "react";

function Contact() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [product,setProduct] = useState("");
  const [quantity,setQuantity] = useState("");
  const [terms,setTerms] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if(name.trim().length < 3){
      alert("Ingrese un nombre válido");
      return;
    }

    if(!email.includes("@")){
      alert("Ingrese un correo válido");
      return;
    }

    if(product === ""){
      alert("Seleccione un producto");
      return;
    }

    if(quantity <= 0){
      alert("Ingrese una cantidad válida");
      return;
    }

    if(!terms){
      alert(
        "Debe aceptar los términos y condiciones"
      );
      return;
    }

    alert(
      "Pedido enviado correctamente"
    );
  };

  return (
    <section
      id="contact"
      className="contact"
    >

      <h2>Realizar Pedido</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <select
          value={product}
          onChange={(e)=>
            setProduct(e.target.value)
          }
        >
          <option value="">
            Seleccione un producto
          </option>

          <option>
            Taladro Inalámbrico
          </option>

          <option>
            Martillo Profesional
          </option>

          <option>
            Sierra Circular
          </option>

          <option>
            Juego de Destornilladores
          </option>
        </select>

        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e)=>
            setQuantity(e.target.value)
          }
        />

        <label>

          <input
            type="checkbox"
            checked={terms}
            onChange={(e)=>
              setTerms(e.target.checked)
            }
          />

          Acepto términos y condiciones

        </label>

        <button type="submit">
          Enviar Pedido
        </button>

      </form>

    </section>
  );
}

export default Contact;