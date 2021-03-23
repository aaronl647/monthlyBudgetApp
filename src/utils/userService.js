import tokenService from "./tokenService";

const BASE_URL = "http://localhost:4000/";

function signup(user) {
  return fetch(BASE_URL + "user/signup", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Email already taken!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

const userService = {
  signup,
  getUser,
  logout,
};

export default userService;
