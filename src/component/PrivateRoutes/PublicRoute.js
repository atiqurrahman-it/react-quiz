import { Navigate } from "react-router-dom";
import style from "../../component/styles/Loading.module.css";
import useAuth from "../../hook/useAuth";
const PublicRoute = ({children}) => {
    const {user,loading}=useAuth()

    
    if(loading){
        return <div className={style.loader}></div>
    }

    if(user){
        return <Navigate to="/" replace />
    }
    
    return children
};

export default PublicRoute;