import React, { useEffect, useState } from "react";
import FormBlock from "./FormBlock";
import { Package } from "../../types/types";

const PackageRegistration: React.FC = () => {
  const [packages, setPackage] = useState<Package[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/packages")
      .then((response) => response.json())
      .then((data) => setPackage(data))
      .catch((error) => console.error("Error fetching visitas:", error));
  }, []);
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
        {packages.map((Package) => (
          <li className="list-item" key={Package._id}>
            <div className="div-block-7">
              <div>{Package.name}</div>
              <div>{Package.fecha}</div>
              <div>{Package.depto}</div>
              <div>{Package.destinatario}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageRegistration;
