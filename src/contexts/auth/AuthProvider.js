
import { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext"
import { UseApi } from "../../hooks/UseApi";

function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const api = UseApi();

	// todo: useEffect com loop infinito quando adicionada a dependencia api
    useEffect(() => {
        async function validateToken(){
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [])

    async function signin (email, password){
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    async function signout(){
        // await api.logout();
        setUser(null);
        setToken('');
    }

    function setToken(token){
        localStorage.setItem('authToken', token);
    }

    return(
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
