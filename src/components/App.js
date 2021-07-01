import React from "react";
import Menu from "./Menu";
import Usuarios from "./Usuarios";

import { BrowserRouter, Route } from "react-router-dom";
const Tareas = () => <div>Tareas</div>;
const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Usuarios} />
    <Route exact path="/tareas" component={Tareas} />
  </BrowserRouter>
);

export default App;
