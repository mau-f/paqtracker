import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { AuthResponse } from "../../types/types";
// import axios from 'axios';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState('');
  const auth = useAuth();
  // const navigate = useNavigate(); // Get navigation function

  if (auth.isAuthenticated) {
    return <Navigate to="/Function" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log("Inicio de sesión exitoso");
        console.log(json.body);
        // console.log(json.body);
        console.log(json);

        if (json.body.accessToken && json.body.refreshToken) {
          console.log("Inicio de sesión exitoso");
          auth.saveUser(json);
        }
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container-in">
        <h1 className="heading">Seguridad Residencial</h1>
        <h3 className="heading-2">
          Una herramienta esencial para residentes y personal de recepción
        </h3>
        <div className="form-block-2 w-form">
          <form id="email-form-2" name="email-form-2" onSubmit={handleSubmit}>
            <input
              className="login-form w-input"
              placeholder="Correo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-form w-input"
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="submit" className="button w-button" value="Submit" />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
      <img
        src="/images/imagen_inicio.png"
        alt="inicio"
        className="img_edificio"
      />
    </section>
  );
};

export default HeroSection;
