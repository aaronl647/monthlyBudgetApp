const Expense = require("../../Models/expenseModel");

module.exports = {
  index,
  show,
  newEntry,
  update,
  verifyDelete,
  deleteOne,
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

async function update(req, res) {
  await Expense.findById(req.params.id, (err, entry) => {
    if (!entry) {
      res.status(404).send("data is not found");
    } else {
      entry.description = req.body.description;
      entry.dueDate = req.body.dueDate;
      entry.amountDue = req.body.amountDue;
      entry.paymentOption = req.body.paymentOption;
      entry.occurance = req.body.occurance;

      entry
        .save()
        .then((expense) => {
          res.json("expense updated!");
        })
        .catch((err) => {
          res.status(400).send("update not possible");
        });
    }
  });
}

async function verifyDelete(req, res) {
  const id = req.params.id;
  await Expense.findById(id, (err, expense) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(expense);
    }
  });
}

async function deleteOne(req, res) {
  await Expense.findOneAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("deleted expense!");
    }
  });
}
