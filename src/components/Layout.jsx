import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
    return ( 
        <div>
            <header>
                <Header></Header>
                <Nav></Nav>
            </header>
            <main>
            <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>

            </footer>
        </div>
     );
}
 
export default Layout;