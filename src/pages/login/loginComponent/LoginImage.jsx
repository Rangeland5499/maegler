import Login from "./LoginImage/Login.png";
import {NavLink } from "react-router-dom";
const LoginImage = () => {
    return ( 
        <section>
            <img src={Login} alt="" className="brightness-50"/>
            <div className="absolute text-white top-1/3 left-1/2 -translate-x-1/2 ">
            <p className="text-h5 font-bold ">Account Login</p>
            <div className="flex space-x-3">
            <NavLink to={"/"} style={({isActive})=>{return{color:isActive?"":"white"}}} className="pr-3 hover:font-bold">Home</NavLink>|
            <NavLink to={"/login"} style={({isActive})=>{return{color:isActive?"rgba(22, 42, 65, 1)":""}}} className="hover:font-bold">Login</NavLink>
            </div>
            </div>
        </section>
     );
}
 
export default LoginImage;