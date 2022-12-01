// import contact from "./contactImage/contact.png";
import { useEffect,useState} from "react";
import { Link} from "react-router-dom";


const About = () => {

    const [content, setContent] = useState([]);

    useEffect(() => {

      fetch("https://dinmaegler.herokuapp.com/agents/6163fc0e2d07e63c24647d0c", {
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
    <section >
        <section className="flex mb-10">

        {content.map((item,id) => (
            <div key={item.id}>

              <article className="bg-white">
                <img src={item.image.url} alt="" className="w-[540px] h-[225px]" />
                <aside className="flex flex-col ml-8">

            <h5 className="font-bold text-h5">{item.name}</h5>
            <h5>{item.title}</h5>
            <hr className="w-1/4 h-[2px] bg-primary1 my-4"/>
            <article className="flex">
            {item.phone}
            </article>
            <article className="flex">
            {item.email}
            </article>
            
            </aside>
            </article>
            </div>
             ))}

        </section>
    </section> );
}
 
export default About;