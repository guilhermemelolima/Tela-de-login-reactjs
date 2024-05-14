import { useContext } from "react";

import { AuthContext } from "./AuthContext";
import Login from "../../components/pages/Login";

function RequireAuth ({children}){
    const auth = useContext(AuthContext);
    if(!auth.user){
        return <Login />
    }
    return children;
}

export default RequireAuth
