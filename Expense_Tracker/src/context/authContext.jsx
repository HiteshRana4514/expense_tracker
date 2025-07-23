import { createContext, use, useContext, useState } from "react";
import { account, ID } from '../lib/appwrite';

const authContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const login = async(userData) =>{
        if(!userData.email || !userData.password){
            alert("Please fill all fields");
            return;
        }
        await account.createEmailPasswordSession(userData.email, userData.password);
        const user = await account.get();
        console.log(user);
        setUser(user);
    }

    const logout = ()=>{
        setUser(null);
    }

    return (
        <authContext.Provider value={{user, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext);