import House from"../homeComponent/House.png";
import ErfaringImage from"../homeComponent/ErfaringImage.png"
import Group from"../homeComponent/Group.png";


const Erfaring = () => {
    return ( 
        <section className="flex justify-center m-auto mt-20">
            <article className="w-1/3" >
                <img src={ErfaringImage} alt="" className="h-[502px] w-[477px]" />      
            </article>
            <article className="w-1/3 pl-4">
                <h5 className="text-[38px]">Vi har fulgt danskerne hjem <br/>i snart 4 årtier</h5>
                <h6 className="text-[24px] pt-5 pb-3">Det synes vi siger noget om os!</h6>
                <p className="text-[18px] pb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                <p className="text-[18px] pb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="flex w-full justify-between">
                <div className="flex">
                <img src={House} alt="" />
                <article  className="pl-4">
                    <p>4829</p>
                    <p>boliger solgt</p>
                </article>
               
                </div>
                <div className="flex">
                <img src={Group} alt="" />
                <article className="pl-4">
                    <p>158</p>
                    <p>boliger til salg</p>
                </article>
               
                </div>
                </div>
            </article>
            
        </section>
     );
}
 
export default Erfaring;