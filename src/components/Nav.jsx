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
            <ul className="flex gap-6 text-lg pt-6">
                <li className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110">
                    <NavLink to="/">Boliger til salg</NavLink>
                </li>
                <li className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110">
                    <NavLink to="/employees">Mæglere</NavLink>
                </li>
                <li className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110">
                    <NavLink to="/favorite">Mine favoritter</NavLink>
                </li>
                <li className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110">
                    <NavLink to="/contactUs">Kontakt os</NavLink>
                </li>
            </ul>
            </div>


        </nav>
     );
}
 
export default Nav;