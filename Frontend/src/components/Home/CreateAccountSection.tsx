import React, { useState } from "react";

const CreateAccountSection: React.FC = () => {
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
    } else {
      console.error("Error al registrarse");
    }
  };

  return (
    <section className="create-account">
      <div className="contact-container">
        <h2 className="heading-4">te gustaría recibir mas información?</h2>
        <p className="paragraph">déjanos tu email y te contactaremos</p>
        <div className="w-form">
          <form id="email-form" name="email-form" onSubmit={handleSignup}>
            <label htmlFor="name">Name</label>
            <input
              className="text-field w-input"
              name="name"
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="email">Password</label>
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
          {message && <p>{message}</p>}
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountSection;
