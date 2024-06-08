import React from "react";
import FormBlock from "./FormBlock";

const ResidentRegistration: React.FC = () => {
  return (
    <div>
      <div className="div-block-5">
        <img
          src="/images/13.png"
          alt="Registro de residentes"
          className="image-11"
        />
        <div className="text-block">Registro de residentes</div>
      </div>
      <div className="div-block-6">
        <FormBlock
          id="email-form"
          name="email-form"
          placeholder="Nombre"
          type="text"
        />
      </div>
      <div className="div-block-7">
        <h5 className="category-list">Nombre</h5>
        <h5 className="category-list">Departamento</h5>
        <h5 className="category-list">N.º de teléfono</h5>
        <h5 className="category-list">Correo</h5>
      </div>
      <ul role="list" className="list">
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
      </ul>
    </div>
  );
};

export default ResidentRegistration;
