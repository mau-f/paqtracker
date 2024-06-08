import React from "react";

const AddNotification: React.FC = () => {
  return (
    <div>
      <div className="add-title">Nueva Notificación</div>
      <div className="div-form-add">
        <div className="w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            method="get"
            className="form-2 not _1"
          >
            <div className="div-block-10">
              <div className="div-form-visit">
                <label htmlFor="name-3">Departamento</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                />
              </div>
              <div className="div-form-visit">
                <label htmlFor="name-3">Asunto</label>
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
            <div className="div-text">
              <label htmlFor="name-3">Mensaje</label>
              <textarea
                id="message"
                name="message"
                max-length="5000"
                data-name="message"
                placeholder="Example Text"
                className="textarea w-input"
              ></textarea>
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button _2 w-button"
              value="Enviar"
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

export default AddNotification;
