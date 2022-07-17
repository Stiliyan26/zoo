import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import { useEffect } from "react";

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();

    useEffect(() => {
        logout();
        navigate('/');
    }, []);

    return null;
}

export default Logout;