import { Link, useNavigate } from "react-router-dom";


const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  let logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
     
       {auth ? <ul className="Navbar">
      
        <li>
          <Link className = "navelement" to="/"><spam >Products</spam></Link>
        </li>
        <li>
          <Link to="/Add-product">Add-product</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li> <Link onClick={logout} to="/signup">
          Log-Out
        </Link> </li>  </ul> :
         <ul  className="Navbar Navbar2">  <li><Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/Login">
           Login
          </Link>
        </li></ul>
        
  }
     
    </div>
  );
};

export default Nav;
