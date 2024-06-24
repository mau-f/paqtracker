import React from "react";
import { useTranslation } from "react-i18next";

const FunctionSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="Function" className="div-function">
      <div className="function">
        <div className="function-text">
          <div className="context">{t("Security")}</div>
          <h2 className="title-function">Registro de visitas</h2>
          <p className="function-description">
            {t("VisitorRegistrationDescription")}
          </p>
        </div>
        <div className="img-function">
          <img src="/images/phone_1.png" alt="phone1" className="image-3" />
        </div>
      </div>
      <div className="function in">
        <div className="img-function">
          <img src="/images/phone_2.png" alt="phone2" className="image-14" />
        </div>
        <div className="function-text">
          <div className="context">organización</div>
          <h2 className="title-function">Registro de Paquetes</h2>
          <p className="function-description">
            Permite a los residentes registrar los paquetes que lleguen al
            complejo de apartamentos o condominio de casas, proporcionando
            detalles como el remitente y la fecha de entrega.
          </p>
        </div>
      </div>
      <div className="function">
        <div className="function-text">
          <div className="context">información actualizada</div>
          <h2 className="title-function">Notificaciones de Llegada</h2>
          <p className="function-description">
            Notifica a los residentes cuando sus paquetes llegan al complejo o
            cuando sus visitantes registrados ingresan, manteniéndolos
            informados en tiempo real sobre las actividades en la comunidad.
          </p>
        </div>
        <div className="img-function">
          <img
            src="/images/el-20texto-20del-20p-c3-a1rrafo-20-5-.png"
            alt="texto"
            className="image-3"
          />
        </div>
      </div>
      <div className="skills">
        <div className="skill">
          <img
            src="/images/notificacion.png"
            alt="notificacion"
            className="img-skill"
          />
          <h4 className="title-skill">Notificaciones de actividad</h4>
          <p className="text-skill">
            mantente informado constantemente de lo que sucede en tu comunidad
          </p>
        </div>
        <div className="skill">
          <img src="/images/reloj.png" alt="reloj" className="img-skill" />
          <h4 className="title-skill">Agilizar la experiencia</h4>
          <p className="text-skill">
            optimiza los tiempos de los usuarios al simplificar el proceso de
            recepción de paquetes y registro de visitantes.
          </p>
        </div>
        <div className="skill">
          <img src="/images/nivel.png" alt="nivel" className="img-skill" />
          <h4 className="title-skill">Aumenta la seguridad</h4>
          <p className="text-skill">
            contribuye a fortalecer la seguridad en el condominio mediante el
            registro y seguimiento de visitantes y paquetes
          </p>
        </div>
      </div>
    </section>
  );
};

export default FunctionSection;
