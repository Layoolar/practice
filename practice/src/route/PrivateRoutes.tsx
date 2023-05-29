import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../redux/store';


const PrivateRoutes = () => {
    const user = useSelector((state: RootState) => state.authentication.isAuthenticated);
    console.log(user)
return (
    user ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;