import { Outlet,Navigate } from "react-router-dom";

localStorage.removeItem("token");
const Protectedroutes = () => {
  const token =localStorage.getItem("token");
  return token ? <Outlet/> : <Navigate to="/"/>
};

export default Protectedroutes;