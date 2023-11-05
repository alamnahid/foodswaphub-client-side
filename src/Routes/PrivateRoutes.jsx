import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    if(loading){
        return <div className="mt-96 mb-96 text-center text-4xl text-pink-700 font-semibold"><span className="loading loading-ball loading-md"></span> loading... </div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;