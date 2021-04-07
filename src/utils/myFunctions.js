import budgetService from "./budgetService";

export default function incomeTotal() {
  budgetService
    .income()
    .then((income) => {
      let result = income.map((a) => a.amount);
      return result;
    })
    .then((income) => {
      let incTotal = income.reduce((totalInc, income) => totalInc + income, 0);
      console.log("hello from the incomeTotal function");
      return incTotal;
    });
}

export default function expenseTotal() {
  budgetService
    .expense()
    .then((expense) => {
      let result = expense.map((a) => a.amountDue);
      return result;
    })
    .then((expense) => {
      const expTotal = expense.reduce(
        (totalExp, expense) => totalExp + expense,
        0
      );
      return expTotal;
    });
}
