let formLog = document.getElementById("formLog"); // forms

formLog.addEventListener("submit", (quedate) => {
  quedate.preventDefault();
  //Los valores de inputs
  let correo = document.getElementById("inputsLemail");
  let password = document.getElementById("inputsLpassword");
  let user = document.getElementById("inputsLuser");

  let listaL = {
    correo: correo.value,
    password: password.value,
  };
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let cuentas = JSON.parse(localStorage.getItem("cuentas"));
  let buscador = cuentas.find(
    //comprueba si el user/correo/password son == al de los registros
    (busca) =>
      busca.email == correo.value &&
      busca.password == password.value &&
      busca.nombre == user.value
  );
  //encuentra email en los registros
  let findEmail = cuentas.find(
    (buscaEmail) => buscaEmail.email == correo.value
  );
  //encuentra email el user
  let findUser = cuentas.find((buscaUser) => buscaUser.nombre == user.value);

  if (buscador) {
    //si los datos son correctos hara una llave de sesion que concuerde con el usuario que paso la validacion
    localStorage.setItem("usuarios", JSON.stringify(buscador));
    window.location.href = "http://127.0.0.1:5500/index.html";
  } else {
    if (findUser == null) {
      return alert("Tu usuario no es el correcto");
    }
    if (findEmail == null) {
      return alert("Trata digitar tu correo correctamente!");
    }
    alert("La contraseña no es la correcta!");
  }
});
