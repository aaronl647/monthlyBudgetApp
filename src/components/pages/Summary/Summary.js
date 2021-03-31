import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExpenseSummary from "../../ExpenseSummary/ExpenseSummary";
import IncomeSummary from "../../IncomeSummary/IncomeSummary";
import "./Summary.css";
function Summary() {
  return (
    <Container className="overview-container">
      <h1>Summary Page</h1>
      <Row>
        <Col sm={8} className="expense-overview-container">
          <h2>Expenses</h2>
          <ExpenseSummary />
        </Col>
        <Col sm={4} className="income-overview-container">
          <h2>Income</h2>
          <IncomeSummary />
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
