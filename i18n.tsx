import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones de ejemplo
const resources = {
  en: {
    translation: {
      D2: "For effective control, it is key to adapt resources to the needs of each client, through common options such as pedestrian control, which regulates the entry of people on foot with manual verification or automated solutions, and control vehicle, which verifies the authorization of vehicles with systems utomated for greater community safety.",
      Q2: " What types of access control exist for condominiums?",
      D1: "The main reasons for controlling access are security and Privacy. Each unit is home to the residents, and allow the entry of unregistered people disturbs this feeling of security and privacy. Furthermore, the building is not a space tourist, but the home of those who pay to live and enjoy in",
      Q1: "Why should visitors be recorded in the building?",
      ViewPlans: "View Plans",
      Ready:"Ready To Start?",
      About: "About",
      Function: "Function",
      Questions: "Questions",
      CreateAccount: "Create Account", 
      ToolMes: "An essential tool for residents and front desk staff",
      ResidentialSecurity :"Residential Security",
      SolMes:"Your comprehensive solution for reception and security",
      NameVisit: "Name Visit",
      ValidUntil: "Valid Until",
      ResidentRegistration: "Resident registration",
      Type: "Type",
      Y: "Yes",
      N:"No",
      Select: "Select one...",
      FreqVis: "Frequent Visit",
      Entrytime: "Entry time",
      Parking: "Parking",
      Date: "Date",
      DNI: "DNI",
      NewVis: "New Visit",
      Add:"Add",
      PhoneNumber: "Phone Number",
      NewPackage :"New package",
      Remitter: "Name remitter",
      NewRes: "New ressident",
      AdmissionDate: "Admission date", 
      Addressee: "Addressee", 
      MassageU: "Do you want to join the paqtracker community?",
      Create: "Create an account now!",
      Name: "Name",
      Email: "Email Adress",
      Password: "Password",
      NewNot: "New Notification",
      SuccesM:"Thank you! Your submission has been received!",
      FailM: "Oops! Something went wrong while submitting the form.",
      Dep: "Department" ,
      Subject: "Subject" ,
      Message: "Message" ,
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
      IncreaseSecurityDescription:
        "Helps strengthen security in the condominium through the registration and tracking of visitors and packages",
    },
  },
  es: {
    translation: {
      D2: "Para un control efectivo, es clave adaptar los recursos a las necesidades de cada cliente, mediante opciones comunes como el control peatonal, que regula la entrada de personas a pie con verificación manual o soluciones automatizadas, y el control vehicular, que verifica la autorización de vehículos con sistemas automatizados para mayor seguridad comunitaria.",
      Q2: "¿Qué tipos de control de acceso existen para condominios?",
      D1: "Las principales razones para controlar el acceso son la seguridad y la privacidad. Cada unidad es el hogar de los residentes, y permitir el ingreso de personas no registradas perturba esta sensación de seguridad y privacidad. Además, el edificio no es un espacio turístico, sino el hogar de quienes pagan por vivir y disfrutar en él.",
      Q1: "¿Por qué se deben registrar las visitas en el edificio?",
      ViewPlans:"Ver Planes",
      Ready:"¿Listo para comenzar?",
      About: "Acerca de",
      Function: "Funciones",
      Questions: "Preguntas",
      CreateAccount: "Crear Cuenta", 
      ToolMes: "Una herramienta esencial para residentes y personal de recepción",
      ResidentialSecurity :"Seguridad Residencial",
      SolMes:"Tu solución integral para la recepción y seguridad",
      NameVisit: "Nombre Visita",
      ValidUntil: "Valido Hasta",
      ResidentRegistration: "Registro de residentes",
      Type: "Tipo",
      Y: "Si",
      N:"No",
      Select: "Selecciona uno...",
      FreqVis: "Visita frecuente",
      Entrytime: "Hora de ingreso",
      Parking: "Estacionamiento",
      Date: "Fecha",
      DNI: "RUT",
      NewVis: "Nueva visita",
      Add:"Agregar",
      PhoneNumber: "Número de teléfono",
      NewPackage :"Nuevo paquete",
      Remitter: "Nombre remitente",
      NewRes: "Nuevo residente",
      AdmissionDate: "Fecha de ingreso", 
      Addressee: "Destinatario", 
      MassageU: "¿Quieres unirte a la comunidad paqtracker?",
      Create: "Crea una cuenta ahora",
      Name: "Nombre",
      Email: "Dirección de correo electronico",
      Password: "Contraseña",
      SuccesM:"Gracias, todo esta correcto",
      FailM: "Oops! Algo salio mal",
      NewNot: "New Nueva Notificacion" ,
      Dep: "Departamento" ,
      Subject: "Asunto" ,
      Message: "Mensaje" ,
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
