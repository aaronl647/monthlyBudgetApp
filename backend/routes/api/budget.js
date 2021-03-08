var express = require("express");
var router = express.Router();
var expenseCtrl = require("../../controllers/api/expense");
var incomeCtrl = require("../../controllers/api/income");

//Expense Routes
router.get("/expense", expenseCtrl.index);
router.get("/expense/:id", expenseCtrl.show);
router.post("/expense/add", expenseCtrl.newEntry);
router.post("/expense/update/:id", expenseCtrl.updateEntry);
router.get("/expense/delete/:id", expenseCtrl.verifyDelete);
router.delete("/expense/delete/:id", expenseCtrl.deleteOne);

//Income Routes
router.get("/income", incomeCtrl.index);
router.get("/income/:id", incomeCtrl.show);
router.post("/income/add", incomeCtrl.newEntry);
router.post("/expense/update/:id", incomeCtrl.update);

router.delete("/income/delete/:id", incomeCtrl.deleteOne);

module.exports = router;
