// const Employees = () => {
//     return ( 
//         <div>employees page</div>
//      );
// }
 
// export default Employees;


import { useEffect,useState} from "react";



export default function Employees() {
    const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/agents", {
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
      <div>
            
            <section className="bg-bg1 pt-32">
            <article className="flex flex-col w-1/2 justify-center m-auto text-center" >
            <h2 className="text-h2 font-bold">Medarbejdere i Roskilde</h2>
            <p>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </article>
            <section className="grid grid-cols-3 grid-rows-2 gap-6 content-center w-1/2 mx-auto mt-20 ">
            
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
  
    </div>
  );
}



// name, title, phone, email, image, id