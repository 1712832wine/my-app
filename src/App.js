import "./App.css";
import Login from "./view/page/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "./view/layout/DefaultLayout/DefaultLayout.js";
import PrivateRoute from "./view/router/index.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/">
          <DefaultLayout></DefaultLayout>
        </Route> */}
        <PrivateRoute path="/">
          <DefaultLayout />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
