import HomeImage from"./homeImage/HomeImage.png";
import Line from"./homeImage/Line.png"


const SearchSection = () => {
    return ( 
        <section className="bg-clip-content -pt-15">
            <img src={HomeImage} alt="Home" className="brightness-50 bg-clip-padding pt-[-30]" />
            <h1 className="absolute text-h1 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Søge efter din drømmebolig</h1>
            <section className="absolute text-2xl text-white top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/5 h-[202px]">
                <h4 className="text-heading1 font-bold text-xl pt-4 pl-7">Søg blandt 158 boliger til salg i 74 butikker</h4>
                <img src={Line} alt="" className="pl-7 pt-3" />
                <h4 className="text-heading1 text-base pt-4 pl-7">Hvad skal din næste bolig indeholde</h4>
                <div className="flex pl-7">
                <input type="text" className="flex justify-center  w-3/4 border border-gray-200"/>
                <button className="bg-primary1 text-base w-[120px] h-[48px] ml-2">Søg</button>
                </div>
            </section>
        </section>
     );
}
 
export default SearchSection;