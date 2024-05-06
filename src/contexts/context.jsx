import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [display, setDisplay] = useState(false);
    const [popupbox, setPopupbox] = useState(false);
    const [whichBalance, setwhichBalance] = useState("");
    const [money, setMoney] = useState(0);


    const [userInfo, setUserInfo] = useState([]);
    const [user, setUser] = useState([]);




    return <AppContext.Provider value={{ email, setEmail, password, setPassword, username, setUsername , userInfo , setUserInfo , user , setUser ,popupbox, setPopupbox , whichBalance, setwhichBalance ,money, setMoney }}>
        {children}
    </AppContext.Provider>
};


export { AppContext, AppProvider }

