
import { useEffect, useState } from "react"

import { AuthContext } from "./AuthContext"
import { UseApi } from "../../hooks/UseApi";

function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const api = UseApi();

	// todo: erro no useEffect
    useEffect(() => {
        async function validateToken(){
            const storageData = localStorage.getItem('authToken');
			console.log('localStorage.getItem("authToken")')
			console.log(localStorage.getItem('authToken'))
			console.log("STORAGEDATA")
			console.log(storageData)
            if (storageData) {
                const data = await api.validateToken(storageData);
					console.log('\nVALIDATE TOKEN IF STORAGEDATA\n')
					console.log('token existe')
					console.log(data.user)
                if (data.user) {
					console.log('\nVALIDATE TOKEN IF DATA.USER\n')
					console.log('usuário existe')
					console.log(data.user)
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
            setToken(data.token)
			console.log('\nAUTHPROVIDER DATA\n')
			console.log('data.user: ')
			console.log(data.user)
			console.log('data.token: ')
            console.log(data.token)
			console.log('\nAUTHPROVIDER USER | TOKE\n')
			console.log('user: ')
			console.log(user)
			console.log('token: ')
            console.log(localStorage.getItem('authToken'))
            return true;
        }
        return false;
    }

    async function signout(){
        // await api.logout();
        setUser(null);
        setToken('')
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
