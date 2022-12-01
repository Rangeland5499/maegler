// import './App.css';
import { Route,Routes} from "react-router-dom";
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router";
import TokenContext from "./Contexts/TokenContext";
import Layout from "./components/Layout";
import Home from "./pages/home/ViewHome";
import ContactUs from "./pages/contactEmployee/ViewContactUs";
import Employees from "./pages/employees/ViewEmployees";
import Favorite from "./pages/favoriteHomes/ViewFavorite";
import AllHome from "./pages/home/homeComponent/AllHomes";
import HouseDetailes from "./pages/HouseDetail/ViewHouseDetailes";
import SignIn from "./pages/login/loginComponent/LoginForm"
import SignUp from "./pages/login/loginComponent/SignUp";
import Register from "./pages/registerUser/ViewRegisterUser";
import Person from "./pages/contactEmployee/contactComponent/Person";


function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<Home />} />
        <Route path="/contactEmployees" element={<ContactUs/>}></Route>
        {/* <Route path="/person" element={<Person/>}></Route> */}
        <Route path="/contactUs" element={<ContactUs/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
        <Route path="/:id" element={<Employees/>} />
         {token ? (
           <Route path="/login" element={<SignIn/>}></Route>
         ) : (
          <Route path="/favorite" element={<Favorite/>}></Route>
          )}
         {/* <Route path="/favorite" element={<Favorite/>}></Route>
         <Route path="/login" element={<SignIn/>}></Route> */}
         <Route path="/allhome" element={<AllHome/>}></Route>
         <Route path="/houseDetailes" element={<HouseDetailes/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
      </Route>
    </Routes>  
    </TokenContext.Provider>
  );
}

export default App;
