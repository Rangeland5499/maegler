import { useEffect,useState} from "react";
import { Link} from "react-router-dom";



const HomeEmployee = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
      fetch("https://dinmaegler.herokuapp.com/agents/?_limit=3", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => setContent(response))
        .catch((err) => console.error(err));
    }, []);
    
    // {name, title, phone, email, image, id}
  
    return ( 
       <section className="bg-bg1 pt-32"> 
        <article className="flex-col w-1/2 justify-center m-auto text-center ">
            <h3 className="font-bold text-h2">Mød vores engagerede medarbejdere</h3>
            <p className="w-3/5 m-auto pt-8">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
            
        </article>

        <section>
            <section className="grid grid-cols-3 gap-6 content-center w-1/2 mx-auto  mt-20 mb-20 ">
            
            {content.map((item,id) => (
            <div key={item.id}>

              <article className="bg-white">
                <img src={item.image} alt="" className="w-[540px] h-[225px]" />
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                
                </article>
            </div>
             ))}
            </section>  
            
           </section>
           <section className="flex justify-center">
              <button className="w-[178px] h-[62px] bg-primary1 text-white mt-20 mb-40 "><Link to={"/employees"} >See alle mæglere</Link></button>
            </section>
           
        </section>
     );
}
 
export default HomeEmployee;