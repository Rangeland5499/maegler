import { useNavigate } from "react-router-dom";
import { useEffect,useState} from "react";


export default function HomeCard({ image,gross,type,cost,price,images,postalcode,city,adress1,id }) {
    const [content, setContent] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/homes/6163f0f0c72bd02bb41c89d9", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
  }, []);



  return (
    <article
      shadow-lg
      shadow-black
    >
      {/* <div > */}
        {/* <img
          src={image}
          alt=""
        /> */}
        <div>
          


        {content.map((item,id) => (
            <div >

              <article className="w-1/3"
              onClick={() => navigate(`/${id}`)}>
                <img src={item.images[0].url} alt="" />
                <p>{item.adress1}</p>
                <div className="flex">
                <p>{item.postalcode}</p>
                <p>{item.city}</p>
                </div>
                <p>{item.type}</p><span>.</span>
                <p>{item.gross}</p>
                
        
                {/* {content.map(item => (
					<HomeCard key={item.id} image={item.images[0].url} city={item.city} type={item.type} id={item.id} />
				))} */}

              </article>
          
        </div>
        ))}
      </div>
    </article>
  );
}
