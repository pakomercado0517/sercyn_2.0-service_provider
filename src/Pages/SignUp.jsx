import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../redux/actions";
import Swal from "sweetalert2";
import useSignUpValidate from "../hooks/useSignUpValidate";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    photo: "",
    phone_number: 0,
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const validate = useSignUpValidate(formData);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = Object.keys(validate);
    try {
      if (!object.length) {
        await dispatch(newUser(formData));
        Swal.fire({
          title: "Felicidades!",
          text: "Usuario creado con éxito! Ahora ya puedes iniciar sesión",
          icon: "success",
          confirmButtonText: "Continuar",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/login");
          }
        });
      }
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        title: "OOOPS!",
        text: "Hay un problema con la información que ingresaste, verificalo e intenta de nuevo.",
        icon: "warning",
        cancelButtonText: "Intentar de nuevo",
      });
    }
  };

  // console.log("validate", validate);
  // console.log("formData", formData);

  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
        alt="sercyn_logo"
        className={`h-18 absolute right-0 top-0 z-10 mt-4 w-28 lg:right-[14rem]`}
      />
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-2xl shadow-md dark:bg-[rgba(0,0,0,0.6)] mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Formulario de Registro
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Nombre</label>
              <input
                id="fist_name"
                name="first_name"
                type="text"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {validate.first_name && (
                <span className={`text-red-600`}>{validate.first_name}</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Apellido
              </label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {validate.last_name && (
                <span className={`text-red-600`}>{validate.last_name}</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Número de teléfono
              </label>
              <input
                id="phone_number"
                type="text"
                name="phone_number"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {validate.phone_number && (
                <span className={`text-red-600`}>{validate.phone_number}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Seleccionar foto</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">
                      o arrastra y suelta aqui una imagen
                    </p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {validate.email && (
                <span className={`text-red-600`}>{validate.email}</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {validate.password && (
                <span className={`text-red-600`}>{validate.password}</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Confirmar contraseña
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {validate.passwordConfirmation && (
                <span className={`text-red-600`}>
                  {validate.passwordConfirmation}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-gray-600">
              Registrarse
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
