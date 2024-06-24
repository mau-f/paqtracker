import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones de ejemplo
const resources = {
  en: {
    translation: {
      Security: "Security",
      VisitorRegistration: "Visitor Registration",
      VisitorRegistrationDescription:
        "Allows residents to register their visitors, providing information such as the visitor's name, date and time of arrival, facilitating access management to the complex.",
      Organization: "Organization",
      PackageRegistration: "Package Registration",
      PackageRegistrationDescription:
        "Allows residents to register packages arriving at the apartment complex or house condominium, providing details such as the sender and delivery date.",
      UpdatedInformation: "Updated Information",
      ArrivalNotifications: "Arrival Notifications",
      ArrivalNotificationsDescription:
        "Notifies residents when their packages arrive at the complex or when their registered visitors enter, keeping them informed in real-time about community activities.",
      ActivityNotifications: "Activity Notifications",
      ActivityNotificationsDescription:
        "Stay constantly informed about what is happening in your community",
      SpeedUpExperience: "Speed Up Experience",
      SpeedUpExperienceDescription:
        "Optimize user time by simplifying the package reception and visitor registration process.",
      IncreaseSecurity: "Increase Security",
      "IncreaseSecurity Description":
        "Helps strengthen security in the condominium through the registration and tracking of visitors and packages",
    },
  },
  es: {
    translation: {
      Security: "Seguridad",
      VisitorRegistration: "Registro de visitas",
      VisitorRegistrationDescription:
        "Permite a los residentes registrar a sus visitantes, proporcionando información como el nombre del visitante, la fecha y hora de llegada, facilitando la gestión de acceso al complejo.",
      Organization: "Organización",
      PackageRegistration: "Registro de Paquetes",
      PackageRegistrationDescription:
        "Permite a los residentes registrar los paquetes que lleguen al complejo de apartamentos o condominio de casas, proporcionando detalles como el remitente y la fecha de entrega.",
      UpdatedInformation: "Información actualizada",
      ArrivalNotifications: "Notificaciones de Llegada",
      ArrivalNotificationsDescription:
        "Notifica a los residentes cuando sus paquetes llegan al complejo o cuando sus visitantes registrados ingresan, manteniéndolos informados en tiempo real sobre las actividades en la comunidad.",
      ActivityNotifications: "Notificaciones de actividad",
      ActivityNotificationsDescription:
        "Mantente informado constantemente de lo que sucede en tu comunidad",
      SpeedUpExperience: "Agilizar la experiencia",
      SpeedUpExperienceDescription:
        "Optimiza los tiempos de los usuarios al simplificar el proceso de recepción de paquetes y registro de visitantes.",
      IncreaseSecurity: "Aumenta la seguridad",
      IncreaseSecurityDescription:
        "Contribuye a fortalecer la seguridad en el condominio mediante el registro y seguimiento de visitantes y paquetes",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
