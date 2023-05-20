import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Circles } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {
        const {user, loading} = useContext(AuthContext)
        const location = useLocation()
        if(loading){
                return <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
              
              
        }
        if(user){
            return children
        }
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;