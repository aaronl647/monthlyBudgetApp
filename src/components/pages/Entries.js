import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Expense from "../Expense/Expense";

function Entries() {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab">
        <Tab eventKey="expense" title="Expenses">
          <Expense />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Entries;
