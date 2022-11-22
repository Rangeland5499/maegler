
import { useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SigIn() {
  // event.preventDefault();
  // const navigate = useNavigate();

      // useEffect(() => {
         
        fetch("https://dinmaegler.herokuapp.com/auth/local", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": {
                  "identifier": "maryam@mail.dk",
                  "password": "12345"
                }
              })
              .then((res) => res.json())
              .catch(err => console.error(err));
      
      // }, []);


  return (
    <div className="flex" onSubmit={SigIn}>
      <div className="flex flex-col justify-center m-auto w-2/5 mt-16 mb-16">
          <form className="bg-primary w-full p-8 px-14 border border-slate-200 shadow-lg">
              <h2 className="text-2xl font-bold text-center my-5">Log ind på din konto</h2>
                 <div className="flex justify-center">
                    <label className="flex flex-col mb-6 w-4/5 ">Email
                    <input  className=" from-slate-400 border border-slate-400 pl-2 py-1.5" type="text" name="username" placeholder="Email" />
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <label className="flex flex-col mb-6 w-4/5 ">Password
                    <input
                       type="password"
                       name="password"
                       className="border border-slate-400 pl-2 py-1.5" placeholder="Password"
                          />
                    </label>
                  </div>
                  
                  <div className="flex justify-center">
                    
                  <button className="text-white text border w-4/5 mt-1 px-10 py-1.5 hover:font-bold bg-primary1" type="submit">Log ind</button>

                  </div>
                  <section className="mt-10 ">
                    <p className="flex justify-center w-2/5">Log ind med</p>
                    <section className="flex justify-center space-x-3 mt-4">
                        <button className=" bg-red text-white px-9 py-1.5"><Link>Google</Link></button>
                        <button className=" bg-blue text-white px-8 py-1.5"><Link>Facebook</Link></button>
                        <button className=" bg-primary1 text-white px-9 py-1.5"><Link>Twitter</Link></button>
                    </section>
                    <section className="flex justify-center mt-4 mb-6">
                      <p>Har du ikke en konto</p>
                      <p className="text-blue"><Link to="/signUp">Operet burger</Link></p>
                    </section>
                  </section>
                 
          </form>
      </div>
        
    </div>
   
  );
}

