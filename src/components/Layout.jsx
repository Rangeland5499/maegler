import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return ( 
        <div>
            <header>
                <Header></Header>
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