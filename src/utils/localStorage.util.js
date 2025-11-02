import Cookies from "js-cookie";
// import { useState } from "react";
// const [isLoggedIn, setIsLoggedIn] = useState(false);

export const getTokenLocal = () => {
  return localStorage.getItem("token");
};

export const getUserLocal = () => {
  const user = Cookies.get("x_ufo");

  if (user !== null && user !== undefined) {
    return JSON.parse(user);
    // setIsLoggedIn(true);
  } else {
    return null;
    // setIsLoggedIn(false);
  }
};

export const setTokenLocal = (token) => {
  localStorage.setItem("token", token);
};



export const setUserLocal = (user) => {
  Cookies.set("x_ufo", JSON.stringify(user), { expires: 30 });
};