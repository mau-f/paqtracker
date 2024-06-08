import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="About" className="div-about">
      <div className="title-container">
        <h4 className="heading-3">
          Tu solución integral para la recepción y seguridad
        </h4>
      </div>
      <div className="img-container">
        <img src="/images/seguridad.png" alt="seguridad" className="image" />
      </div>
    </section>
  );
};

export default AboutSection;
