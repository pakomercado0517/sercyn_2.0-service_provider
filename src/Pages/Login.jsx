import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../redux/actions";
import Swal from "sweetalert2";
import useLoginValidate from "../hooks/useLoginValidate";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const validate = useLoginValidate(loginData);

  const handleChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = Object.keys(validate);
    try {
      if (!object.length) {
        await dispatch(loginUser(loginData));
        await Swal.fire({
          title: "Bienvenido!",
          text: "Has iniciado sesión correctamente",
          icon: "success",
          confirmButtonColor: "#002E94",
          confirmButtonText: "Aceptar",
          background: "rgba(37, 116, 169, 0.7)",
          color: "#FAF7F0",
        }).then(async (res) => {
          if (res.isConfirmed) {
            await navigate("/dashboard");
          }
        });
      }
    } catch (error) {
      console.log("error", error);
      Swal.fire({
        title: "Error",
        text: "Email o contraseña incorrecto, verifícalo o registrate para poder ingresar",
        icon: "error",
        confirmButtonColor: "red",
        confirmButtonText: "Intentar de nuevo",
      });
    }
  };

  return (
    <div>
      {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
        alt="sercyn_logo"
        className={`h-18 absolute right-[130px] top-24 z-10 mt-4 w-28`}
      /> */}
      <form onSubmit={handleSubmit}>
        <div className=" p-3 min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl dark:from-gray-400 dark:to-gray-800"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-[rgba(0,0,0,0.6)]">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold dark:text-gray-300">
                    Inicia sesión para continuar...
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 dark:text-gray-300">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:bg-[rgba(255,255,255,0.1)]"
                        placeholder="Email address"
                        onChange={handleChange}
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-gray-300">
                        Email
                      </label>
                      {validate.email && loginData.email.length > 0 && (
                        <span className={`text-red-600`}>{validate.email}</span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-gray-300">
                        Contraseña
                      </label>
                      {validate.password && loginData.password.length > 0 && (
                        <span className={`text-red-500`}>
                          {validate.password}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <button className="bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md px-2 py-1">
                        Enviar
                      </button>
                    </div>
                    <div className="relative">
                      <Link to="/signup">
                        <h1>
                          Aún no tienes cuenta? Haz click aquí para registrarte
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
