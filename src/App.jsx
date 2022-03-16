import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./parts/layout/Layout";
import "./App.css";

import logo from "./logo.svg";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
