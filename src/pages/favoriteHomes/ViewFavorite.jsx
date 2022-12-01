// const Favorite = () => {
//     return (
//          <div>
        


    
    
//         </div>
//          );
// }
 
// export default Favorite;

import { useEffect,useState} from "react";

export default function Favorite() {
    const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/users/6163ff832616683c887k982x", {
  "method": "PUT",
  "headers": {
    "Content-Type": "application/json",
    "null": null,
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjNmZjgzMjYxNjY4M2M4ODNiMDQ5ZiIsImlhdCI6MTYzNTQ4OTE5NCwiZXhwIjoxNjM4MDgxMTk0fQ.M2y0A5CHSjvh1nJ3zaTszkVJ0tpRHPoIblb9Wyb77Kg"
  },
  "body": {
    "homes": [
      "61572ad4251a8a42ec8cb544",
      "615d4f82cc7ab04508bb8997"
    ]
  }
})
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
  }, []);

  return (
      <div>
           
            <section className="bg-bg1 pt-32">
           
            <section className="grid grid-cols-2 grid-rows-2 gap-6 content-center w-1/2 mx-auto mt-20 ">
            
            {content.map((item,id) => (
            <div key={item.id}>

              <article className="bg-white">
                {/* <img src={item.images[0].url} alt="" className="w-[540px] h-[225px]" />
                <p>{item.adress1}</p>
                <div className="flex">
                <p>{item.postalcode}</p>
                <p>{item.city}</p>
                </div>
                <p>{item.type}</p><span>.</span>
                <p>{item.gross}</p>
                <p>{item.energylabel}</p> */}
                {content}
                </article>
            </div>
             ))}
            </section>  
           </section>
    </div>
  );
}
