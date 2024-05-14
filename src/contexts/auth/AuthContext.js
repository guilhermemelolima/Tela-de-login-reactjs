import { createContext } from "react";
import { User } from "../../types/User";


const AuthContextType = {
    user: User | null,
    signin: function (email, password) {
		return Promise.resolve(false)
    },
    signout: () => {}
};

const AuthContext = createContext(AuthContextType);

export { AuthContext, AuthContextType };
