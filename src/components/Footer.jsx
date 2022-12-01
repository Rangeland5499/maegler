import Logo from "../images/Logo.png";
import Phone from "../images/Phone.png";
import Arrow from "../images/Arrow.png";
import Location from "../images/Location.png";


import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( <section>
                <section className="bg-bg1 h-[560px] grid mt-0">
                    <article className="col-start-2 col-span-4 pt-16 ">
                        <NavLink to="/">
                        <img src={Logo} alt="" />

                        </NavLink>
                        <p className="pt-3 text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have<br/> suffered alteration in some form, by injected humour, or randomised words.</p>
                    </article>
                    <article className="col-start-5 col-span-2 h-28" >
                        <h6 className="font-bold">Quick Links</h6>
                        <ul className="flex-col h-[160px] justify-between ">
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
                    <article className="col-start-2 col-end-4 bg-white  shadow-lg -mt-20 h-[434px]">
                        <div className="ml-14 pt-14 ">
                        <article className="flex pb-10 ">
                        <img src={Phone} alt="" />
                        <div className="pl-3">
                            <h6>Ring til os</h6>
                            <h6 className="font-bold">+45 7070 4000</h6>
                        </div>
                        </article>
                        <article className="flex pb-10">
                        <img src={Arrow} alt="" />
                        <div className="pl-3">
                            <h6>Send en mail</h6>
                            <h6 className="font-bold">4000@dinmaegler.com</h6>
                        </div>
                        </article>
                        <article className="flex pb-10">
                        <img src={Location} alt="" />
                        <div className="pl-3">
                            <h6>Butik</h6>
                            <h6 className="font-bold">Stændertorvet 78, 4000 Roskilde</h6>
                        </div>
                        </article>
                        <article className="pb-12">
                            <p>Din Mægler Roskilde, er din boligibutik i lokalområdet</p>
                        </article>
                        </div>
                    </article>

                </section>
                <section className="grid grid-row-3 justify-end text-para2">
                    <h6 >Medlem af </h6>
                    <h2 className="text-h2 font-bold">DMS</h2>
                    <h3>Dansk Mægler Sammenslutning</h3>
                </section>
                <section className="h-[90px] bg-primary1">
                    <p className=" flex text-white justify-center py-10" >Layout By Jit Banik 2020</p>

                </section>

            </section> 
            );
}
 
export default Footer;