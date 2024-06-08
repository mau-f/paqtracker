import React from "react";

const QuestionSection: React.FC = () => {
  return (
    <section className="sec-questions">
      <div id="question" className="questions _1">
        <div className="questions-text">
          <div className="context">Preguntas</div>
          <h2 className="title-function">
            ¿Por qué se deben registrar las visitas en el edificio?
          </h2>
          <p className="function-description">
            Las principales razones para controlar el acceso son la seguridad y
            la privacidad. Cada unidad es el hogar de los residentes, y permitir
            el ingreso de personas no registradas perturba esta sensación de
            seguridad y privacidad. Además, el edificio no es un espacio
            turístico, sino el hogar de quienes pagan por vivir y disfrutar en
            él.
          </p>
        </div>
        <div className="img-function">
          <img src="/images/5235.jpg" alt="visitas" className="image-11" />
        </div>
      </div>
      <div className="questions">
        <div className="img-function">
          <img
            src="/images/mobile-20login-amico.png"
            alt="login"
            className="image-11"
          />
        </div>
        <div className="questions-text">
          <div className="context">Preguntas</div>
          <h2 className="title-function">
            ¿Qué tipos de control de acceso existen para condominios?
          </h2>
          <p className="function-description">
            Para un control efectivo, es clave adaptar los recursos a las
            necesidades de cada cliente, mediante opciones comunes como el
            control peatonal, que regula la entrada de personas a pie con
            verificación manual o soluciones automatizadas, y el control
            vehicular, que verifica la autorización de vehículos con sistemas
            automatizados para mayor seguridad comunitaria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
