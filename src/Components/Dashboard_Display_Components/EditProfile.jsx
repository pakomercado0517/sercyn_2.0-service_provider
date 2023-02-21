import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions";
import Swal from "sweetalert2";

function DashEditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userLogged = useSelector((state) => state.userLogged);
  const [userUpdate, setUserUpdate] = useState({ ...user });

  const handleChange = (e) => {
    e.preventDefault();
    setUserUpdate({
      ...userUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUser(userUpdate, userLogged.data.token));
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        text: "Datos actualizados con exito...",
      });
    } catch (error) {
      Swal.fire({
        title: "Error al enviar los datos",
        text: error.message,
        iconColor: "red",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-full">
      <h1 className="text-lg text-center text-gray-400 dark:text-gray-200 my-2">
        Actualización de Perfil
      </h1>
      <div>
        <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-400 rounded-md">
          <div>
            <div className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white dark:bg-gray-400 rounded-md border-t-4 border-gray-700">
              <div className="grid">
                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                    placeholder="First name"
                    defaultValue={userUpdate.first_name}
                    onChange={handleChange}
                  />
                  <label
                    html="first_name"
                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                  >
                    First name
                  </label>
                </div>
              </div>
              <div className="grid">
                <div className="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                    placeholder="Last name"
                    defaultValue={userUpdate.last_name}
                    onChange={handleChange}
                  />
                  <label
                    html="last_name"
                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid">
                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                    placeholder="Company"
                    defaultValue={userUpdate.Company?.companyName}
                    onChange={handleChange}
                  />
                  <label
                    html="companyName"
                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                  >
                    Company
                  </label>
                </div>
              </div>
              <div className="grid">
                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                    placeholder="E-mail"
                    defaultValue={userUpdate.email}
                    onChange={handleChange}
                  />
                  <label
                    html="email"
                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                  >
                    E-mail
                  </label>
                </div>
              </div>
              <div className="grid">
                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                  <input
                    type="text"
                    name="logo"
                    id="logo"
                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                    placeholder="Company logo"
                    defaultValue={userUpdate.Company?.logo}
                    onChange={handleChange}
                  />
                  <label
                    html="logo"
                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                  >
                    Company Logo
                  </label>
                </div>
              </div>
              <div className="grid">
                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                    placeholder="Address"
                    defaultValue={userUpdate.Company?.address}
                    onChange={handleChange}
                  />
                  <label
                    html="address"
                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                  >
                    Address
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 "
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashEditProfile;
