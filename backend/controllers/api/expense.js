const Expense = require("../../Models/expenseModel");

module.exports = {
  index,
  show,
  newEntry,
};

async function index(req, res) {
  const allExpense = await Expense.find({});
  res.status(200).json(allExpense);
}

async function show(req, res) {
  const id = req.params.id;
  await Expense.findById(id, (err, expense) => {
    res.status(200).json(expense);
  });
}

async function newEntry(req, res) {
  const entry = await new Expense(req.body);
  entry
    .save()
    .then((expense) => {
      res.status(200).json({ expense: "new expense added successfully!" });
    })
    .catch((err) => {
      res.status(400).send("adding new expense failed");
    });
}
