import React, { useEffect, useState } from "react";
import FormBlock from "./FormBlock";
import { Package } from "../../types/types";
import { useTranslation } from "react-i18next";

const PackageRegistration: React.FC = () => {
  const { t } = useTranslation();
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
        <h3 className="text-block">{t("PackageRegistration")}</h3>
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
        <h5 className="category-list">{t("Remitter")}</h5>
        <h5 className="category-list">{t("Type")}</h5>
        <h5 className="category-list">{t("AdmissionDate")}</h5>
        <h5 className="category-list">{t("Addressee")}</h5>
      </div>
      <div className="scroll-container">
        <ul role="list" className="list">
          {packages.map((Package) => (
            <li className="list-item" key={Package._id}>
              <div className="div-block-7">
                <div className="item-list">{Package.name}</div>
                <div className="item-list">{Package.fecha}</div>
                <div className="item-list">{Package.depto}</div>
                <div className="item-list">{Package.destinatario}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageRegistration;
