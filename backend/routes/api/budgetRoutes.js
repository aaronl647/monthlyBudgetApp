var express = require("express");
var router = express.Router();
var expenseCtrl = require("../../controllers/api/expense");

//Expense Routes
router.get("/expense", expenseCtrl.index);

module.exports = router;
