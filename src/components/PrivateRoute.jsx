import { Navigate } from "react-router-dom";


function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  console.log("auth"+auth)
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;