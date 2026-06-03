import {
  FaTruck,
  FaShieldAlt,
  FaTools
} from "react-icons/fa";

function Benefits() {

  const benefits = [
    {
      icon: <FaTruck />,
      text: "Entrega rápida"
    },
    {
      icon: <FaShieldAlt />,
      text: "Garantía de calidad"
    },
    {
      icon: <FaTools />,
      text: "Asistencia técnica especializada"
    }
  ];

  return (
    <section
      id="benefits"
      className="benefits"
    >

      <h2>¿Por qué elegirnos?</h2>

      <div className="benefit-container">

        {benefits.map((item,index)=>(
          <div
            key={index}
            className="benefit-card"
          >

            <div className="icon">
              {item.icon}
            </div>

            <h3>{item.text}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Benefits;