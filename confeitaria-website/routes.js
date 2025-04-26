import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Routes = () => {
   return(
       <BrowserRouter>
           <Routes>
               <Route element={<Home />} path="/" />
               <Route element={<Sobre />} path="/sobre" />
               <Route element={<Usuario />} path="/usuario" />
           </Routes>
       </BrowserRouter>
   )
}

export default Routes;