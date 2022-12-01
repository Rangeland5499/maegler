import { useEffect,useState} from "react";

const Person = () => {
    const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/agents/6163fc0e2d07e63c24647d0c", {
      method: "GET",
    
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
  }, []);

    return ( 
         <section className="grid grid-cols-3 grid-rows-2 gap-6 content-center w-1/2 mx-auto mt-20 ">
            
            {content.map((item,id) => (
            <div key={item.id}>
            


              <article className="">
              {/* <Link to={"/employee"} > */}
                <img src={item.image.url} alt="" className="w-[540px] h-[225px]" />
                {/* </Link> */}
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                
                </article>
                
            </div>
             ))}
            </section> 
     );
}
 
export default Person;