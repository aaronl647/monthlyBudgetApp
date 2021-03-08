const Income = require("../../Models/incomeModel");

module.exports = {
  index,
  show,
  newEntry,
  update,
  deleteOne,
};

async function index(req, res) {
  const allIncome = await Income.find({});
  res.status(200).json(allIncome);
}

async function show(req, res) {
  const id = req.params.id;
  await Income.findById(id, (err, income) => {
    res.status(200).json(income);
  });
}

async function newEntry(req, res) {
  const entry = await new Income(req.body);
  entry
    .save()
    .then((income) => {
      res.status(200).json({ income: "new income added successfully!" });
    })
    .catch((err) => {
      res.status(400).send("adding new income failed");
    });
}

async function update(res, req) {
  await new Income.findByIdAndUpdate(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(result);
    }
  });
}

async function deleteOne(req, res) {
  await Income.findOneAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("deleted income!");
    }
  });
}
