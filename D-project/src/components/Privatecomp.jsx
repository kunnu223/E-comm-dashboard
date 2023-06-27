
import { Navigate, Outlet } from 'react-router-dom'

const Privatecomp = () => {
    const auth = localStorage.getItem('user');
  return auth?<Outlet/>:<Navigate to="/Signup"/>
}

export default Privatecomp