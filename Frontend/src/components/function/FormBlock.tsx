import React from "react";

interface FormBlockProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}

const FormBlock: React.FC<FormBlockProps> = ({
  id,
  name,
  placeholder,
  type,
}) => {
  return (
    <div className="form-block w-form">
      <form id={id} name={name} data-name={name} method="get" className="form">
        <input
          className="text-field-3 w-input"
          name={name}
          data-name={name}
          placeholder={placeholder}
          type={type}
        />
        <input type="date" className="input" />
        <input
          type="submit"
          data-wait="Please wait..."
          className="submit-button w-button"
          value="Buscar"
        />
      </form>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  );
};

export default FormBlock;
