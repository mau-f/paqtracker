import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CreateAccountSection: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const response = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      console.log("Registro exitoso");
      setMessage("Registro exitoso");
      setName("");
      setEmail("");
      setPassword("");
      window.location.hash = "#hero";
    } else {
      console.error("Error al registrarse");
    }
  };

  return (
    <section id="create-account" className="create-account">
      <div className="contact-container">
        <h2 className="heading-4">
          {t("MassageU")}
        </h2>
        <p className="paragraph">{t("Create")}</p>
        <div className="w-form">
          <form id="email-form" name="email-form" onSubmit={handleSignup}>
            <label htmlFor="name">{t("Name")}</label>
            <input
              className="text-field w-input"
              name="name"
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
            <label htmlFor="email">{t("Email")}</label>
            <input
              className="text-field-2 w-input"
              name="email"
              placeholder=""
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
            />
            <label htmlFor="email">{t("Password")}</label>
            <input
              className="text-field-2 w-input"
              name="password"
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
            />
            <input type="submit" className="button w-button" value="Submit" />
          </form>
          {message && <p className="messageType">{message}</p>}
          <div className="w-form-done">
            <div>{t("SuccesM")}</div>
          </div>
          <div className="w-form-fail">
            <div>{t("FailM")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountSection;
