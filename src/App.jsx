import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import User from "./User";
import PrivateRoute from "./layout/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
