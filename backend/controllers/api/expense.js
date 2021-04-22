const Expense = require("../../Models/expenseModel");

module.exports = {
  index,
  show,
  newEntry,
  updateEntry,
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

async function updateEntry(req, res) {
  await Expense.findById(req.params.id, (err, entry) => {
    if (!entry) {
      res.status(404).send("data is not found");
    } else {
      entry.description = req.body.description;
      entry.startDate = req.body.startDate;
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

async function deleteOne(res, req) {
  console.log(res);
  let exp = new Promise((res, req) => {});
  exp.then((value) => {
    console.log(value);
  });
  // console.log(req);
  // await Expense.deleteOne({ _id: _id })
  //   .then(function () {
  //     console.log("Data Deleted.");
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
}
