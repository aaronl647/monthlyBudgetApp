import React, { useState } from "react";
import IncomeForm from "../IncomeForm/IncomeForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import { Button } from "react-bootstrap";
import "./FormButton.css";

function FormButton() {
  const [showIncomeForm, setIncomeForm] = useState(false);
  const [showExpenseForm, setExpenseForm] = useState(false);

  const onClick = () => setIncomeForm(!showIncomeForm);
  const onClickExpense = () => setExpenseForm(!showExpenseForm);
  return (
    <div className="form-section">
      <div className="button-container">
        <Button variant="success" onClick={onClick}>
          {showIncomeForm ? "-" : "+"}
        </Button>
      </div>
      <div className="content-container">
        {showIncomeForm ? <IncomeForm /> : null}
        {showExpenseForm ? <ExpenseForm /> : null}
      </div>
    </div>
  );
}

export default FormButton;
