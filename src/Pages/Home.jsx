import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      className={`w-full h-[100vh] text-white bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center flex-col justify-center`}
    >
      <div className={``}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
          alt="sercyn_logo"
          className={`w-20 h-28 flex justify-center`}
        />
      </div>
      <div className={`flex flex-col jsutify-center items-center`}>
        <h1 className={`text-xl text-center mt-4`}>
          Bienvenido a la página de gestión como prestador de servicios
          turísticos
        </h1>
        <h2 className={`text-lg text-center mt-12`}>
          Por favor Inicia Sesión para poder continuar...
        </h2>
        <Link to="/login">
          <button
            className={`w-44 h-10 bg-blue-500 text-white rounded-md shadow-md mt-8`}
          >
            Inicia Sesión aquí...
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
