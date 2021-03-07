import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Expense from "../Expense/Expense";
import Income from "../Income/Income";
function Entries() {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab">
        <Tab eventKey="expense" title="Expenses">
          <Expense />
        </Tab>
        <Tab eventKey="income" title="Income">
          <Income />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Entries;
