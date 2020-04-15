import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./components/Style.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Data from "./components/Data"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path="/data"> 
          <Data/>
          </Route>
          <Route path="/">
              <Input/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
