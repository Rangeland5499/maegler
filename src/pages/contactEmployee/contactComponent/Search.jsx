
import { BsSearch } from "react-icons/bs";
const SearchProperty = () => {


    
    return ( 
        <section className="w-[350px] h-[175px] bg-lightBlue pl-10 pt-4">
            <h5 className="text-h5 font-bold text-head2">Search Property</h5>
            <hr className="my-4 w-[290px]"/>
            <div className="flex items-center mt-6 bg-white w-[290px] h-[42px] border border-gray-200 pl-4">
            <BsSearch className="text-md cursor-pointer " />

            <input
            // onChange={(e) => setSearch(e.target.value)}
            type="Search" placeholder="Search" className="pl-2 focus:outline-none"/>

            </div>
        </section>
     );
}
 
export default SearchProperty;