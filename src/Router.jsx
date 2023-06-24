/* eslint-disable react/prop-types */
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import Details from "./containers/Details";
import Listing from "./containers/Listing";
import Addlisting from "./containers/Addlisting";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Listing />} />
      <Route
        path="/addlisting"
        element={<ProtectedRoute component={Addlisting} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/listing/:id" element={<Details />} />
    </Routes>
  );
};
export default Router;
