import React from "react";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AutheticatedComponent from "./components/auth/AutheticatedComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <AutheticatedComponent>
          <Route path="/" component={Home} />
        </AutheticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
