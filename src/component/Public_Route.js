import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.user); // Get the user from Redux state

  if (user) {
    // If the user is already logged in, redirect to /home
    return <Navigate to="/home" replace />;
  }

  // If the user is not logged in, render the child component
  return children;
};

export default PublicRoute;
