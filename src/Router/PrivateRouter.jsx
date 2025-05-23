import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <>
        <span className="loading loading-spinner loading-md"></span>
      </>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRouter;
