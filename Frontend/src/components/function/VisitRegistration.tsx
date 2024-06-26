import React, { useEffect, useState } from "react";
import FormBlock from "./FormBlock";
import { Visita } from "../../types/types";
import { useTranslation } from "react-i18next";


const VisitRegistration: React.FC = () => {
  const { t } = useTranslation();
  const [visitas, setVisitas] = useState<Visita[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/visitas")
      .then((response) => response.json())
      .then((data) => setVisitas(data))
      .catch((error) => console.error("Error fetching visitas:", error));
  }, []);

  return (
    <div>
      <div className="div-block-5">
        <img src="/images/5.png" alt="Libro de visitas" className="image-11" />
        <div className="text-block">{t("VisitorRegistration")}</div>
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
        <h5 className="category-list">{t("NameVisit")}</h5>
        <h5 className="category-list">{t("Type")}</h5>
        <h5 className="category-list">{t("AdmissionDate")}</h5>
        <h5 className="category-list">{t("DNI")}</h5>
        <h5 className="category-list">{t("ValidUntil")}</h5>
        <h5 className="category-list">{t("Parking")}</h5>
      </div>
      <div className="scroll-container">
        <ul role="list" className="list">
          {[...visitas].reverse().map((visita) => (
            <li className="list-item" key={visita._id}>
              <div className="div-block-7">
                <div className="item-list">{visita.name}</div>
                <div className="item-list">{visita.frequent}</div>
                <div className="item-list">{visita.fecha}</div>
                <div className="item-list">{visita.rut}</div>
                <div className="item-list">{visita.validoHasta}</div>
                <div className="item-list">{visita.parking}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VisitRegistration;

// {visita.nombre} - {visita.tipo} - {visita.fechaIgreso} -{" "}
// {visita.rut} - {visita.validoHasta} - {visita.estacionamiento}
