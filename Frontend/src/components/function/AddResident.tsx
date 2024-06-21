import React, { useState } from "react";

const AddResident: React.FC = () => {
  const [name, setName] = useState("");
  const [depto, setDepto] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const addResident = async (e: React.FormEvent) => {
    e.preventDefault();
    postMessage("");

    const response = await fetch("http://127.0.0.1:5000/newResident", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, depto, phone, email }),
    });

    if (response.ok) {
      console.log("Registro exitoso");
    } else {
      console.error("Error al registrarse");
    }
  };

  return (
    <div>
      <div className="add-title">Nuevo Residente</div>
      <div className="div-block-14">
        <div className="w-form">
          <form
            id="email-form-3"
            name="email-form-3"
            data-name="Email Form 3"
            method="get"
            className="form-2"
            onSubmit={addResident}
          >
            <div className="div-block-13">
              <div className="div-form-visit">
                <label htmlFor="name">Nombre</label>
                <input
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  type="text"
                  id="name-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="div-form-visit">
                <label htmlFor="name-4">Departamento</label>
                <input
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  type="text"
                  id="name-3"
                  value={depto}
                  onChange={(e) => setDepto(e.target.value)}
                />
              </div>
            </div>
            <div className="div-block-13">
              <div className="div-form-visit">
                <label htmlFor="name-4">Número de teléfono</label>
                <input
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  type="text"
                  id="name-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="div-form-visit">
                <label htmlFor="name-4">Correo</label>
                <input
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  type="text"
                  id="name-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button w-button"
              value="Submit"
            />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResident;
