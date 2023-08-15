import { useContext } from "react";
import AuthProvider from "../contexts/AuthContext";

const useAuth = () => {
    const auth=useContext(AuthProvider)
    return auth

};

export default useAuth;