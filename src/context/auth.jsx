import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [cookies, removeCookie, setCookie] = useCookies(["user"]);
    
    const [user, setuser] = useState(
      cookies.user && cookies.user != "undefined" ? cookies.user :null
      );

    const logout = () => {
        setuser(null);
        removeCookie("user");
    }

    const setUser = (data) =>{
      setuser(data);
    }

    
    const getUser = () => {
      return user;
    };

    return (
      <AuthContext.Provider
        value={{ user, logout, setUser, getUser }}
      >
        {children}
      </AuthContext.Provider>
    ); 
}

export const authContext = () =>{
   return useContext(AuthContext);
}