const Expense = require("../../Models/expenseModel");

module.exports = {
  index,
};

async function index(req, res) {
  const allExpense = await Expense.find({});
  res.status(200).json(allExpense);
}
