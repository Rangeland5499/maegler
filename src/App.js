// import './App.css';
import { Route,Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/ViewHome";
import ContactEmployees from "./pages/contactEmployee/ViewContact";
import ContactUs from "./pages/contactUs/ViewContactUs";
import Employees from "./pages/employees/ViewEmployees";
import Favorite from "./pages/favoriteHomes/ViewFavorite";
import AllHome from "./pages/home/homeComponent/AllHomes";
import HouseDetailes from "./pages/HouseDetail/ViewHouseDetailes";
import Login from "./pages/login/ViewLogin";
import SignUp from "./pages/login/loginComponent/SignUp";
import Register from "./pages/registerUser/ViewRegisterUser";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<Home />} />

        <Route path="/contactEmployees" element={<ContactEmployees/>}></Route>
         <Route path="/contactUs" element={<ContactUs/>}></Route>
         <Route path="/employees" element={<Employees/>}></Route>
         <Route path="/favorite" element={<Favorite/>}></Route>
         <Route path="/allhome" element={<AllHome/>}></Route>
         <Route path="/houseDetailes" element={<HouseDetailes/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
      </Route>
    </Routes>  
  );
}

export default App;
