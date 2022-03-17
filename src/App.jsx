import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./parts/layout/Layout";
import Main from "./pages/main/Main";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
