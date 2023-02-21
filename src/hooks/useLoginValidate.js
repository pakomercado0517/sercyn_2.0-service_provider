const validate = (loginData) => {
  let error = [];
  //email validation
  if (!loginData.email) {
    error.email = "Por favor, ingresa un email valido...";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(loginData.email)
  ) {
    error.email =
      "El email solo puede contener letras, números, puntos, guiones, @ y guión bajo";
  }

  if (!loginData.password) error.password = "Ingresa tu contraseña";
  return error;
};

export default validate;
