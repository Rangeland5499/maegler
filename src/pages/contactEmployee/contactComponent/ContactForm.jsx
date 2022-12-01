import { useForm } from "react-hook-form";
import { useState} from "react";

export default function ContactForm() {

    const [message, setMessage] = useState('');
  const { register, formState: { errors }, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    alert("Tak for din besked");
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[650px] border border border-gray-200 py-12 ">
       <div className="pl-10">
        <h4 className="font-bold text-lg">Kontakt Peter Sørensen</h4>
        <hr className="w-[60px] h-[4px] bg-primary1 mt-2 mb-4" />
       </div>
       <div className="flex flex-col items-center">
        <div className="flex gap-4">
        <div className="flex flex-col">
        <label htmlFor="email" className="font-bold">Navn</label>
        <input className="w-[275px] h-[50px] border border-gray-400 pl-2 mt-2"
      placeholder="Indtase navn"
        {...register("firstName", { required: true, maxLength: 20 }, { pattern: /^[A-Za-z]+$/i })} 
        // aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
      </div>
        <div className="flex flex-col">
        <label htmlFor="Email" className="font-bold">email</label>   
      <input 
      className="w-[275px] h-[50px] border border-gray-400 pl-2 mt-2"
        id="email"
        placeholder="Indtase email"
        {...register("mail", { required: "Email Address is required" ,  pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }})} 
        // aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert" >{errors.mail?.message}</p>}
      </div>
      </div>

      
        <div className="flex flex-col mt-4">
            <label htmlFor="message" className="font-bold">Emne</label>
            
            <input className="w-[570px] h-[50px] border border-gray-400 pl-2 mt-2 pt-2"
            id="message"
            name="message"
            placeholder="Hvad drejer din henvendelse sig om" 
            {...register("message", { required: true, maxLength: 20 }, { pattern: /^[A-Za-z]+$/i })}
            >
            </input>
         </div>
         <div className="flex flex-col mt-4">
            <label htmlFor="message" className="font-bold">Besked</label>
            
            <textarea 
            className="w-[570px] h-[180px] border border-gray-400 pl-2 mt-2 pt-2"
            id="message"
            name="message"
            placeholder="Skriv din besked her" 
            
            >
            </textarea>
         </div>
         </div>
         <div className="pl-10">
         <button type="submit" className="w-[168px] h-[52px] bg-primary1 text-white text-lg font-bold mt-4" >Send besked</button>
         </div>
    </form>
  );
}