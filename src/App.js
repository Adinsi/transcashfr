import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Formulaire from "./page/Formulaire";
import Home from "./page/Home";
import Mentions from "./page/Mentions";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/*' element={<Home />} />
        <Route path='/mentions' element={<Mentions />} />
        <Route path='/activation' element={<Formulaire />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
