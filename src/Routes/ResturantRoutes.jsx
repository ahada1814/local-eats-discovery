import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

export const ResturantRoutes = ({ children }) => {
  const location = useLocation();

  const { loading } = useContext(AuthContext);

  const demoUser = 'owner'


  if (loading) {
    return (
        <div className="flex items-center mx-auto">
            <HashLoader color="#ff8a00" size={100} />
        </div>
    );
  }

  if (demoUser == 'owner') {
    return children;
  }
  return <Navigate to="/sign-up" state={{ from: location }} replace />;
};
