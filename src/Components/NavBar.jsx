import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
import use from "../assets/user.png"


function NavBar() {

//to show quantity available in cart
  const {state}=useContext(CartContext)
  //1. get all cart itrms from the contest api (cart provider page) use context hook
  //2. for total qty use usereducer hook 
  //3. that will give total quantaty
  //4.show that qty above the cart icon

  const { user, isAuthenticated, isLoading,logout } = useAuth0();
  const totalqty=state.cart.reduce((acc,item)=>{
    return acc+item.qty
  },0)

  






  const navigate=useNavigate();
  return (

   

    <div className="shadow">
      <nav className="flex justify-around items-center px-5 py-4 bg-white">
        
        <div onClick={()=>
        navigate("/")
        } className="flex items-center cursor-pointer space-x-2">
          <img className="h-8" src={logo} alt="logo" />
          <p className="text-green-900 text-2xl font-bold">momos</p>
        </div>

        
        <div className="flex space-x-6 text-gray-600 font-medium">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/allergyAdvice">Allergy Advice</NavLink>
          <NavLink to="/services">Services</NavLink>
          {isAuthenticated?<button onClick={()=>(logout())}>Logout</button>:<div className="flex space-x-6"><NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink></div>}
         
          

        </div>

        
        <div className="flex items-center space-x-3">
          <NavLink className="flex relative" to="/cart"><TiShoppingCart size={30} /><span className="absolute -top-3 -right-1 text-orange-500 font-bold">{totalqty}</span></NavLink>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500"><FaFacebook size={30} /></a>
          <a href="https://www.tiktok.com/en/" target="_blank" rel="noopener noreferrer" className="text-gray-500"><FaTiktok size={30} /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500"><FaInstagram size={30} /></a>
          <NavLink
            to="/contact"
            className="ml-3 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold"
          >
            Contact Us
          </NavLink>
           {isAuthenticated?<NavLink to="/userProfile"><img src={use} className="w-[30px]" alt="image" /></NavLink>:<div></div>}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
