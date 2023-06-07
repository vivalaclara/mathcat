import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Geometria from "./components/Geometria";
import Trigonometria from "./components/Trigonometria";
import Funcoes from "./components/Funcoes";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/geometria" element={<Geometria></Geometria>}></Route>
        <Route path="/trigonometria" element={<Trigonometria></Trigonometria>}></Route>
        <Route path="/funcoes" element={<Funcoes></Funcoes>}></Route>
  
      </Routes>
    );
  };
  
  export default AppRoutes;