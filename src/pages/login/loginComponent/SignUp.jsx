// import FlatButton from "material-ui/FlatButton";
// import RaisedButton from "material-ui/RaisedButton";
// import TextField from "material-ui/TextField";
import PasswordStr from "./PasswordStr";

const SignUp = (
    {
        history,
        onSubmit,
        onChange,
        errors,
        user,
        score,
        btnTxt,
        type,
        pwMask,
        onPwChange
      }

    ) => {
    return (  
        <div>
             <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
               
                <div className="w-full px-24 py-24 overflow-hidden bg-white shadow-md w-2/5">
                    <form>
                        <div>
                        <h3 className="text-xl font-bold text-center mb-12">
                        Opret bruger hos Din Mægler
                        </h3>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Fulde navn
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full  border-gray-300 shadow-sm border border-slate-400 pl-2 mt-2 h-8 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Fulde navn"
                                />
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
                                />
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
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full border border-gray-300 pl-2 mt-2 h-8 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="password"
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
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="block w-full border border-gray-300 pl-2 mt-2 h-8 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Bekræft password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-6">
                           
                            <button
                                type="submit"
                                className=" w-full items-center px-4 py-2  text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent  active:bg-gray-900 false"
                            >
                                Opret bruger
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;