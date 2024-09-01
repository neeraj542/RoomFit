import Cookies from 'js-cookie';
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            // Verify token with backend if necessary
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token) => {
        Cookies.set('authToken', token, { expires: 1 / 24 });
        setIsAuthenticated(true);
    };

    const logout = () => {
        Cookies.remove('authToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
