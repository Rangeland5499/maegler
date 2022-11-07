import { useEffect,useState} from "react";
// import AllHome from "./AllHomes";
import { Link, useNavigate } from "react-router-dom";


const SelectedHome = () => {
        const [content, setContent] = useState([]);
        const navigate = useNavigate();

    useEffect(() => {
      fetch("https://dinmaegler.herokuapp.com/homes?_limit=4&_start=2", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => setContent(response))
        .catch((err) => console.error(err));
       
    }, []);

    
    // with keys {energylabel, type, images, gross, payment, price, city, cost, basementsize, lotsize, netto, postalcode, adress1, description, livingspace, agent, rooms, built, remodel, floorplan, lat, long, users, id})
 
    return ( 
        <section className="bg-bg1 pt-32">
            <article className="flex flex-col w-1/2 justify-center m-auto text-center" >
            <h2 className="text-h2 font-bold">Udvalgte Boliger</h2>
            <p>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </article>
            <section className="grid grid-cols-2 grid-rows-2 gap-6 content-center w-1/2 mx-auto mt-20 ">
            
            
            {content.map((item,id) => (
            <div key={item.id}>

              <article className="bg-white"
              // onClick={() => navigate(`/${id}`)}
              >
                <img src={item.images[0].url} alt="" className="w-[540px] h-[225px]" />
                <p>{item.adress1}</p>
                <div className="flex">
                <p>{item.postalcode}</p>
                <p>{item.city}</p>
                </div>
                <p>{item.type}</p><span>.</span>
                <p>{item.gross}</p>
                <p>{item.energylabel}</p>

                </article>

            </div>
          ))}
            </section>
            <section className="flex justify-center">
              <button className="w-[178px] h-[62px] bg-primary1 text-white mt-20 mb-40 "><Link to={"/AllHome"} >See alle boliger</Link></button>
            </section>
        </section>
     );
}
 
export default SelectedHome;