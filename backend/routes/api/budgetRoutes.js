var express = require("express");
var router = express.Router();
var expenseCtrl = require("../../controllers/api/expense");

//Expense Routes
router.get("/expense", expenseCtrl.index);
router.get("/expense/:id", expenseCtrl.show);
router.post("/expense/add", expenseCtrl.newEntry);

module.exports = router;
