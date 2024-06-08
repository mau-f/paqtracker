import React from "react";

const AddVisit: React.FC = () => {
  return (
    <div>
      <div className="add-title">Nueva visita</div>
      <div className="div-form-add">
        <div className="w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            method="get"
            className="form-2"
          >
            <div className="div-block-13">
              <div className="div-form-visit _1">
                <label htmlFor="name-3">Nombre</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="name-2">Fecha</label>
                <input type="date" className="new-visit-form" />
              </div>
            </div>
            <div className="div-block-13">
              <div className="div-form-visit _1">
                <label htmlFor="name-3">Rut</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="name-3">Estacionamiento</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                />
              </div>
            </div>
            <div className="div-block-13">
              <div className="div-form-visit _1">
                <label htmlFor="name-3">Hora de entrada</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="field">Visita frecuente</label>
                <select
                  id="field"
                  name="field"
                  data-name="Field"
                  className="select-field w-select"
                >
                  <option value="">Select one...</option>
                  <option value="Another option">Si</option>
                  <option value="Another option">No</option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button _2 w-button"
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

export default AddVisit;
