import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const GuardedRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default GuardedRoute