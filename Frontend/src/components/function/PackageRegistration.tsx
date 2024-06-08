import React from "react";
import FormBlock from "./FormBlock";

const PackageRegistration: React.FC = () => {
  return (
    <div>
      <div className="div-block-5">
        <img
          src="/images/6.png"
          alt="Registro de paquetes"
          className="image-12"
        />
        <h3 className="text-block">Registro de paquetes</h3>
      </div>
      <div className="div-block-6">
        <FormBlock
          id="email-form"
          name="email-form"
          placeholder="Nombre remitente"
          type="text"
        />
      </div>
      <div className="div-block-7">
        <h5 className="category-list">Nombre remitente</h5>
        <h5 className="category-list">Tipo</h5>
        <h5 className="category-list">Fecha ingreso</h5>
        <h5 className="category-list">Destinatario</h5>
      </div>
      <ul role="list" className="list">
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
      </ul>
    </div>
  );
};

export default PackageRegistration;
