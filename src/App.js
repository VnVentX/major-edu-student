import React from "react";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthenticatedComponent from "./components/auth/AuthenticatedComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <AuthenticatedComponent>
          <Route path="/" component={Home} />
        </AuthenticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
