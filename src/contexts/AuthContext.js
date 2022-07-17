import { createContext, useContext} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

const initialValue = {
    email: '',
}

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useLocalStorage('user', initialValue);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser(initialValue);
    }

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated: user.email}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}