import { Link } from "react-router-dom";


function Nav() {
 return (
   <nav className="nav flex-column nav-tabs">
     <Link className="nav-link" to="../project/signin">
       Home</Link>
     <Link className="nav-link" to="">
       Search</Link>
       <Link className="nav-link" to="../project/signin">
       Signin</Link>
     <Link className="nav-link" to="../project/signup">
       Signup</Link>
     <Link className="nav-link" to="../project/account">
       Account</Link>
   </nav>
 );
}


export default Nav;