import { IoIosPaperPlane} from "react-icons/io";
import { BsTelephoneFill} from "react-icons/bs";

const Header = () => {
    return ( 
    <header>
        <div className="flex w-full h-5">
        <div className="flex ">
        <article className="flex">
            <IoIosPaperPlane/>
            <p>400@dinmaegler.com</p>
        </article>
        <article className="flex">
            <BsTelephoneFill/>
            <p>+4570704000</p>
        </article>
        </div>

        <div>
        <article><button>Login</button></article>

        </div>
        </div>



    </header> );
}
 
export default Header;