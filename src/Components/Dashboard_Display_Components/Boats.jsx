import React from "react";
import { useSelector } from "react-redux";

function DashBoats() {
  const user = useSelector((state) => state.user);

  console.log("user", user);

  return (
    <>
      <div className="grid-col gap-6 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-lg text-center text-gray-400 dark:text-gray-200 my-2">
          Actualización de Perfil
        </h1>
        <div className="md:col-span-2 lg:col-span-1">
          <div className="h-full py-8 px-6 space-y-6 rounded-xl border dark:bg-gray-400 border-gray-200 dark:border-gray-800 bg-white">
            {user.Company.Boats.length === 0 ? (
              <>
                <h2 className="text-gray-400 dark:text-white text-center">
                  Por favor Ingresa una embarcación.
                </h2>
                <button className="text-gray-400 dark:text-white text-center">
                  Ingresar nueva embarcación
                </button>
              </>
            ) : (
              <div className="flex justify-evenly">
                {user.Company.Boats.map((el) => {
                  return (
                    <div key={el.id} className="">
                      <span>{el.name}</span>
                      <img
                        src={el.photo}
                        alt="boat_photo"
                        width="300"
                        height="275"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoats;
