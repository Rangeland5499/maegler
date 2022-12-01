// import FlatButton from "material-ui/FlatButton";
// import RaisedButton from "material-ui/RaisedButton";
// import TextField from "material-ui/TextField";

import { useState } from "react";
import {useForm} from 'react-hook-form'
import { Navigate } from "react-router-dom";

    const SignUp = () => {
        const [toggle1, setToggle1] = useState(false);
        const [toggle2, setToggle2] = useState(false);
        const navigate = Navigate;
        let password;

        const { register, handleSubmit, formState: { errors }, reset,watch,getValues } = useForm({
        mode: "onTouched"
        });
        password = watch("password", "");

        const onSubmit = (data) => {
            console.log(data);
            alert("Du skal logge ind for at fortsætte.");
        reset();
        }
        // const alert="Du skal logge ind for at fortsætte."
    return (  
        <div>
             <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
               
                <div className="w-full px-24 py-24 overflow-hidden bg-white shadow-md w-2/5">
                    <form onSubmit={handleSubmit(onSubmit) }>
                        <div>
                        <h3 className="text-xl font-bold text-center mb-12">
                        Opret bruger hos Din Mægler
                        </h3>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700">
                                Fulde navn
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full  border-gray-300 shadow-sm border border-slate-400 pl-2 mt-2 h-8 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Fulde navn"
                                    {...register('firstName', { required: true })}
                                />
                                 {errors.firstName && <p>Name is required.</p>}
                            </div>
                           
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email adresse
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full border border-gray-300 pl-2 mt-2 h-8  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Email adresse"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <p>Email is required.</p>}

                            </div>

                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                            <i id="passlock"></i>
                            <i id="showpass"  onClick={() => { setToggle1(!toggle1) }}></i>
                                <input
                                   type={toggle1 ? "text" : "password"} placeholder='Password' name="password" {...register("password", { required: "**Password is required", minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" }})}
                                    className="block w-full border border-gray-300 pl-2 mt-2 h-8 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Bekræft password
                            </label>
                            <div className="flex flex-col items-start">
                            <i id="passlock" ></i>
                        <i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle2(!toggle2) }}></i>
                                <input
                                   
                                    // name="password_confirmation"
                                    className="block w-full border border-gray-300 pl-2 mt-2 h-8 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Bekræft password"
                                    type={toggle2 ? "text" : "password"}  name="cpassword" {...register("cpassword", { required: "**Password is required" },{validate: (value) => value === getValues("password")})}
                                />
                            </div>
                        </div>
                        <p className='alerts'>{errors.cpassword?.message}</p>
                        <div className="flex items-center justify-center mt-6">
                           
                            <button
                                name="submit"
                                type="submit"
                                className=" w-full items-center px-4 py-2  text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent  active:bg-gray-900 false"
                            >
                                Opret bruger
                            </button>
                            <p> </p>

                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;