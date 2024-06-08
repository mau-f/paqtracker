import React from "react";

const AddResident: React.FC = () => {
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
