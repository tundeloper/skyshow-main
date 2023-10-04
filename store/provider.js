import React, { useReducer, useState } from "react";
import { Context } from "./context";
import { date } from "yup";

const defaultState = {
  name: "",
  token: "",
  wallet_Balance: "",
  email: "",
  username: "",
};

function reducerActions(state, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        authToken: action.payload,
      };

    case "SAV":
      return {
        ...state,
        ...action.payload,
      };

    case "LOGUT":
      return {
        ...state,
        authToken: "",
      };

    case "LOGUT":
      break;

    default:
      return defaultState;
  }
}

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultState);

  function authenticate(token) {
    dispatch({ type: "AUTH", payload: token });
  }

  function saveCredential(payload) {
    console.log(payload);
    dispatch({ type: "SAV", payload });
  }

  function logout() {
    dispatch({ type: "LOGUT" });
  }
  const value = {
    // states
    token: state.token,
    name: state.name,
    wallet_Balance: state.wallet_Balance,
    email: state.email,
    username: state.username,
    isAuthenticated: !!state.authToken,

    // functions
    saveCredential,
    authenticate,
    logout,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}