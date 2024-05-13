let registerForm = document.getElementById("formRegister");

registerForm.addEventListener("submit", (permanece) => {
  permanece.preventDefault();
  //mis valores de registro

  let user = document.getElementById("inputsRuser").value;
  let email = document.getElementById("inputsRemail").value;
  let password = document.getElementById("inputsRpass").value;
  //lista de ususarios nombradadas
  let lista = {
    nombre: user,
    email: email,
    password: password,
  };
  // local en blanco
  console.log(lista);
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  cuentas.push(lista);
  console.log(cuentas);
  localStorage.setItem("cuentas", JSON.stringify(cuentas));

  // for comparador
  for (let index = 0; index < cuentas.length - 1; index++) {
    const validacion = cuentas[index].email;

    if (validacion == email) {
      return alert("Este correo ya fue tomado, prueba otro!");
    } else {
      window.location.href = "Login.html";
      return alert("Fuiste registrado exitosamente");
    }
  }
});
