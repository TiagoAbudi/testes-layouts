import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";

const Rotas = () => {
  return (
    <div className="app">
      <Routes>
        <Route component={Login} exact path="/login" />
      </Routes>
    </div>
  );
};

export default Rotas;
