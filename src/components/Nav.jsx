import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav className="flex w-full">
            <div className="flex justify-end w-5/12 h-12 my-3">
                <NavLink to="/">
                <img src={Logo} alt="logo" />
                </NavLink>
           
            </div>
            <div className="flex w-7/12 justify-center">
            <ul className="grid grid-cols-4 gap-5 justify-self-center text-lg pt-6">
                <li>
                    <NavLink to="/houseSale">Boliger til salg</NavLink>
                </li>
                <li className=" flex justify-center">
                    <NavLink to="/employees">Mæglere</NavLink>
                </li>
                <li>
                    <NavLink to="/favorite">Mine favoritter</NavLink>
                </li>
                <li className=" flex justify-end">
                    <NavLink to="/contactUs">Kontakt os</NavLink>
                </li>
            </ul>
            </div>


        </nav>
     );
}
 
export default Nav;