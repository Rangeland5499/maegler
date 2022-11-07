import SearchSection from "./homeComponent/SearchSection";
import Erfaring from "./homeComponent/SectionTwo";
import Info from "./homeComponent/SectionThree";
import SelectedHome from "./homeComponent/SelectedHome";
import Newspaper from "./homeComponent/Newspaper";
const Home = () => {
    return ( 
        <div>
            <SearchSection/>
            <Erfaring/>
            <Info/>
            <SelectedHome/>
            <Newspaper/>
        </div>
     );
}
 
export default Home;