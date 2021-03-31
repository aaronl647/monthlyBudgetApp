import React, { useState } from "react";
import IncomeForm from "../IncomeForm/IncomeForm";
import { Button } from "react-bootstrap";
import "./FormButton.css";

function FormButton() {
  const [showIncomeForm, setIncomeForm] = useState(false);
  const onClick = () => setIncomeForm(true);
  return (
    <div className="form-section">
      <div className="button-container">
        <Button onClick={onClick}>Add</Button>
      </div>
      <div className="content-container">
        {showIncomeForm ? <IncomeForm /> : null}
      </div>
    </div>
  );
}

export default FormButton;
