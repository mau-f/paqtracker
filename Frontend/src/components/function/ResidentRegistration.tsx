import React, { useEffect, useState } from "react";

import FormBlock from "./FormBlock";
import { resident } from "../../types/types";

const ResidentRegistration: React.FC = () => {
  const [residents, setPackage] = useState<resident[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/residents")
      .then((response) => response.json())
      .then((data) => setPackage(data))
      .catch((error) => console.error("Error fetching visitas:", error));
  }, []);
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
      <div className="scroll-container">
        <ul role="list" className="list">
          {residents.map((resident) => (
            <li className="list-item" key={resident._id}>
              <div className="div-block-7">
                <div className="item-list">{resident.name}</div>
                <div className="item-list">{resident.depto}</div>
                <div className="item-list">{resident.phone}</div>
                <div className="item-list">{resident.email}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResidentRegistration;
