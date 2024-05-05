import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [display, setDisplay] = useState(false);

    const [userInfo, setUserInfo] = useState([]);
    const [user, setUser] = useState([]);




    return <AppContext.Provider value={{ email, setEmail, password, setPassword, username, setUsername , userInfo , setUserInfo , user , setUser }}>
        {children}
    </AppContext.Provider>
};


export { AppContext, AppProvider }

