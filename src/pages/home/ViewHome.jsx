import SearchSection from "./homeComponent/SearchSection";
import Erfaring from "./homeComponent/SectionTwo";
import Info from "./homeComponent/SectionThree";
import SelectedHome from "./homeComponent/SelectedHome";
const Home = () => {
    return ( 
        <div>
            <SearchSection/>
            <Erfaring/>
            <Info/>
            <SelectedHome/>
        </div>
     );
}
 
export default Home;