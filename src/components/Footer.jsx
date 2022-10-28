import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( <section>
                <section className="bg-bg1 h-[560px] grid grid-cols-6">
                    <article className="col-start-2 col-span-4 w-9/12 pt-16 h-[133px]">
                        <NavLink to="/">
                        <img src={Logo} alt="" />

                        </NavLink>
                        <p className="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have<br/> suffered alteration in some form, by injected humour, or randomised words.</p>
                    </article>
                    <article className="col-start-4 col-span-4 w-1/5" >
                        <h6 className="font-bold">Quick Links</h6>
                        <ul className="flex-col">
                            <li>
                                <NavLink to="/houseSale">Boliger til salg</NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/employees">Mæglere</NavLink>
                            </li>
                           
                            <li className="">
                                <NavLink to="/contactUs">Kontakt os</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Log ind / blive bruger</NavLink>
                            </li>
                        </ul>
                    </article>

                </section>
                <section>

                </section>

            </section> 
            );
}
 
export default Footer;