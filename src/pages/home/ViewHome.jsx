import SearchSection from "./homeComponent/SearchSection";
import Erfaring from "./homeComponent/SectionTwo";
import Info from "./homeComponent/SectionThree";
import SelectedHome from "./homeComponent/SelectedHome";
import Newspaper from "./homeComponent/Newspaper";
import HomeEmployee from "./homeComponent/HomeEmpolyee";
import GooglePlay from "./homeComponent/GooglePlay";

const Home = () => {
    return ( 
        <div>
            <SearchSection/>
            <Erfaring/>
            <Info/>
            <SelectedHome/>
            <Newspaper/>
            <HomeEmployee/>
            <GooglePlay/>

        </div>
     );
}
 
export default Home;