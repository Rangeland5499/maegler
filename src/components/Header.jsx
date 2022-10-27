import { IoIosPaperPlane} from "react-icons/io";
import { BsTelephoneFill} from "react-icons/bs";
import { BsFillPersonFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";



const Header = () => {
    return ( 
    <header>
        <div className="flex bg-primary1 h-16 py-4 ">
        <div className="flex w-2/3 justify-center">
        <article className="flex text-white">
            <IoIosPaperPlane size={22}/>
            <h3 className="pl-1 text-lg">400@dinmaegler.com</h3>
        </article>
        <article className="flex text-white pl-5">
            <BsTelephoneFill size={22}/>
            <h3 className="pl-1 text-lg">+4570704000</h3>
        </article>
        </div>

        <div className="flex w-1/3 justify-center">
        <article className=" flex text-white">
            <BsFillPersonFill size={26}/>
            <NavLink to="/login" className="text-lg pl-2">Login</NavLink>
        </article>

        </div>
        </div>



    </header> );
}
 
export default Header;