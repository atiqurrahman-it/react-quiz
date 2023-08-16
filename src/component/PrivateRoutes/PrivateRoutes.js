import { Navigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import style from "../../component/styles/Loading.module.css";
const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth()

    if(loading){
        return <div className={style.loader}></div>
    }

    if(!user){
        return <Navigate to="/login" replace />
    }
    
    return children
    
};

export default PrivateRoutes;