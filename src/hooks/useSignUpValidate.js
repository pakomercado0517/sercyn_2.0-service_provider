const validate = (formData) => {
  let error = [];

  //first name validation
  if (!formData.first_name) {
    error.first_name = "Por favor ingresa tu nombre";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.first_name)) {
    error.first_name = "El nombre solo puede contener letras y espacios";
  }

  //last name validation
  if (!formData.last_name) {
    error.last_name = "Por favor, ingresa tu apellido";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.last_name)) {
    error.last_name = "El apellido solo puede contener letras y espacios";
  }

  //phone number validation
  if (!/^[a-zA-Z0-9]{0,10}$/.test(formData.phone_number)) {
    error.phone_number = "El teléfono debe de ser de 10 dígitos como máximo";
  }

  //email validation
  if (!formData.email) {
    error.email = "Por favor, ingresa tu correo electronico";
  } else if (!/^[a-zA-Z0-9]{0,10}$/.test(formData.phone_number)) {
    error.email =
      "El email solo puede contener letras, números, puntos, guiones y guión bajo";
  }

  //password validation
  if (!formData.password) {
    error.password = "Por favor, ingresa una contraseña";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(
      formData.password
    )
  ) {
    error.password =
      "La contraseña debe tener como mínimo 8 carácteres, al menos una mayúsculay un número";
  }

  //repeat password validation
  if (formData.password !== formData.passwordConfirmation) {
    error.passwordConfirmation = "Las contraseñas no coinciden";
  }

  return error;
};

export default validate;
