import React from "react";
import FormBlock from "./FormBlock";

const VisitRegistration: React.FC = () => {
  return (
    <div>
      <div className="div-block-5">
        <img src="/images/5.png" alt="Libro de visitas" className="image-11" />
        <div className="text-block">Libro de visitas</div>
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
        <h5 className="category-list">Nombre visita</h5>
        <h5 className="category-list">Tipo</h5>
        <h5 className="category-list">Fecha ingreso</h5>
        <h5 className="category-list">Rut</h5>
        <h5 className="category-list">Valido hasta</h5>
        <h5 className="category-list">Estacionamiento</h5>
      </div>
      <ul role="list" className="list">
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
      </ul>
    </div>
  );
};

export default VisitRegistration;
