
import GooglePlay from "./homeImage/GooglePlay.png";
import { Link} from "react-router-dom";


const GoooglePlay = () => {
    return ( 
        <section className="h-[512px] my-0">
            <img src={GooglePlay} alt="" />
            <div className=" flex-col -translate-x-1/3 -translate-y-[350px] w-1/3 mx-auto text-white">
                <h4 className="text-h2 pb-4">Hold dig opdateret <br/> på salgsprocessen</h4>
                <p className="text-lg">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                <div className="pt-4">
                    <button className="w-[189px] h-[62px] border border-white bg-white text-black mr-4 text-lg"><Link to="#">Google Play</Link></button>
                    <button className="w-[189px] h-[62px] border border-white mr-4 text-lg text-white"><Link to="#">Apple Store</Link></button>
                </div>
            </div>
        </section>
     );
}
 
export default GoooglePlay;
