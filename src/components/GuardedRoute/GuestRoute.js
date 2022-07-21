import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


const GuestRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

export default GuestRoute;