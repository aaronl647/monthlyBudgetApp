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
    .then((income) => {
      console.log(income);
    })
    .catch((err) => {
      console.log(err);
    });
}

const budgetService = {
  income,
};

export default budgetService;
