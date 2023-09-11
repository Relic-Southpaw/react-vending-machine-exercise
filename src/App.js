import React from "react";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import DietSoda from "./DietSoda";
import Water from "./Water";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/diet">
          <DietSoda />
        </Route>
        <Route exact path="/">
          <Water />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
