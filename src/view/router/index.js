import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
console.log("private");
function PrivateRoute({ children, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        console.log("isLogged", isLoggedIn);
        return !isLoggedIn ? <Redirect to="/login" /> : children;
      }}
    />
  );
}

function mapStateToProps(state) {
  console.log("my: ", state);
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
}
let Connect = connect(mapStateToProps, {})(PrivateRoute);
export default Connect;
