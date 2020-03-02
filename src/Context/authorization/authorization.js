import React from 'react';

export const Authorization = React.createContext();

export const LoginProvider = ( {children}, loc ) => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const login = React.useCallback ( (login, password) => {
        setIsLoggedIn(true);
    }, []);

    const logout = React.useCallback ( () => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Authorization.Provider value={{ isLoggedIn, login, logout }} >
            {children}
        </Authorization.Provider>
    )
};