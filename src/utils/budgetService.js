const BASE_URL = "http://localhost:4000/budget";

function income() {
  return fetch(BASE_URL + "/income", {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Could not find Income!");
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

function expense() {
  return fetch(BASE_URL + "/expense", {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Could not find Expense!");
    })
    .then((result) => {
      // console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

// function getExpenseID() {
//   return fetch(BASE_URL + "/expense/delete/:id", {
//     method: "GET",
//     headers: new Headers({ "Content-Type": "application/json" }),
//     body: JSON.stringify(),
//   })
//     .then((res, err) => {
//       if (res.ok === true) {
//         // console.log(res.json());
//         return res.json();
//       } else {
//         res.json(err);
//       }
//     })
//     .then((expense) => console.log(expense));
// }

function deleteExpense() {
  return fetch(BASE_URL + "/expense/delete/:id", {
    method: "DELETE",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(),
  }).then((res) => {
    console.log("hello");
  });
}

const budgetService = {
  income,
  expense,
  deleteExpense,
  // getExpenseID,
};

export default budgetService;
