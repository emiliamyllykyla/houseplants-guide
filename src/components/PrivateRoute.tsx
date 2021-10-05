import { Redirect } from "react-router-dom";
import { useAuth } from "./Auth";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  return <>{auth?.token.claims.admin ? children : <Redirect to="/login" />}</>;
};

export default PrivateRoute;
