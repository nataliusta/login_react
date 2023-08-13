import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const loginHandler = () => {};
    
    return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
}

export default AuthContext;