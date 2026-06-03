import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [terms, setTerms] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [productError, setProductError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [termsError, setTermsError] = useState("");

  const validateName = (value) => {
    setName(value);

    if (value.trim().length < 3) {
      setNameError("El nombre debe tener al menos 3 caracteres.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    setEmail(value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
      setEmailError("Ingrese un correo con formato usuario@dominio.com");
    } else {
      setEmailError("");
    }
  };

  const validateProduct = (value) => {
    setProduct(value);

    if (value === "") {
      setProductError("Seleccione un producto.");
    } else {
      setProductError("");
    }
  };

  const validateQuantity = (value) => {
    setQuantity(value);

    if (value <= 0 || value === "") {
      setQuantityError("La cantidad debe ser mayor a 0.");
    } else {
      setQuantityError("");
    }
  };

  const validateTerms = (checked) => {
    setTerms(checked);

    if (!checked) {
      setTermsError("Debe aceptar los términos y condiciones.");
    } else {
      setTermsError("");
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      nameError ||
      emailError ||
      productError ||
      quantityError ||
      termsError ||
      !name ||
      !email ||
      !product ||
      !quantity ||
      !terms
    ) {

      alert(
        "Por favor corrija los errores antes de enviar."
      );

      return;
    }

    alert("Pedido enviado correctamente.");

    setName("");
    setEmail("");
    setProduct("");
    setQuantity("");
    setTerms(false);
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
          placeholder="Nombre completo"
          value={name}
          onChange={(e) =>
            validateName(e.target.value)
          }
          className={
            nameError ? "input-error" : ""
          }
        />

        {nameError && (
          <span className="error">
            {nameError}
          </span>
        )}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) =>
            validateEmail(e.target.value)
          }
          className={
            emailError ? "input-error" : ""
          }
        />

        {emailError && (
          <span className="error">
            {emailError}
          </span>
        )}

        <select
          value={product}
          onChange={(e) =>
            validateProduct(e.target.value)
          }
          className={
            productError ? "input-error" : ""
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

        {productError && (
          <span className="error">
            {productError}
          </span>
        )}

        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) =>
            validateQuantity(e.target.value)
          }
          className={
            quantityError ? "input-error" : ""
          }
        />

        {quantityError && (
          <span className="error">
            {quantityError}
          </span>
        )}

        <label className="terms-label">

          <input
            type="checkbox"
            checked={terms}
            onChange={(e) =>
              validateTerms(
                e.target.checked
              )
            }
          />

          Acepto los términos y condiciones

        </label>

        {termsError && (
          <span className="error">
            {termsError}
          </span>
        )}

        <button type="submit">
          Enviar Pedido
        </button>

      </form>

    </section>
  );
}

export default Contact;