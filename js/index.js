let log = document.getElementById("logeate");
//boton eliminar imagen
let btnEliminar = document.getElementById("eliminarImagen");

//titulo y descripcion de la imagen
let tituloImg = document.getElementById("inputTitulo2");
let descripcionImg = document.getElementById("descripcionIMG");
//salirse del modal
let btnSalir = document.getElementById("salirModal");

//Modal
let modalTitle = document.getElementById("modalTitle");
let modalDesc = document.getElementById("modalDesc");
//Cerrar modal
let modal = document.getElementById("modalImg");
btnSalir.addEventListener("click", () => {
  modal.close();
});

//imagen del modal
let imgModal = document.getElementById("imgMuestra");

log.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Login.html";
});

//botones log out y registrate
let logOut = document.getElementById("logOut");

let registrate = document.getElementById("registrarse");

//contenedor de las imagenes
let imagenes = document.getElementById("imagenes");
// llama mi puerta a mi sesion
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
// establece una puerta de datos leibles por mi de nombre == al que esta sesion
let imgs = JSON.parse(localStorage.getItem(usuarios.nombre)) || [];
//Bienvenida

//El boton logeate solo aparecera si no hay nadie en sesion, para salir de sesion usar el boton log out
if (usuarios != null) {
  log.innerHTML = "";
} else {
  console.log(logOut);
}

document.getElementById("bienvenida").innerHTML =
  "Bienvenid@ " + usuarios.nombre + " ¿que imagen subiras hoy?";

//log out funcion
logOut.addEventListener("click", () => {
  window.location.reload();
  localStorage.removeItem("usuarios");

  window.location.href = "http://127.0.0.1:5500/Login.html";
});

//borra el login si usuarios != null

//revisa datos de imagen y los muestra apenas el usuario entra
for (let m = 0; m < imgs.length; m++) {
  const revisaDatos = imgs[m];
  const revisaImgs = imgs[m].imgs;
  const revisaTitle = imgs[m].titulo;
  const revisaDesc = imgs[m].Desc;

  let div = document.createElement("div");
  let img = document.createElement("img");

  img.src = revisaImgs;
  img.classList.add("img");
  div.classList.add("divImg");

  imagenes.appendChild(div);
  div.appendChild(img);
  //Añade evento click a la imagenes creadas
  img.addEventListener("click", () => {
    //Confirm de mostrar o borrar
    if (
      confirm(
        "Presiona ACEPTAR para ver la imagen / Presiona CANCELAR para ELIMINAR la imagen"
      )
    ) {
      if (img.src == revisaImgs) {
        imgModal.src = revisaImgs;
        modalTitle.innerHTML = revisaTitle;
        modalDesc.innerHTML = revisaDesc;
      }
      modal.showModal();
    } else {
      //filtra/evalua, borrando la llave de las imagenes y pone el array filtrado para eliminar la imagen seleccionada
      let elimina = imgs.find((eliminalo) => eliminalo.imgs == img.src);
      if (elimina == revisaDatos) {
        imgs = imgs.filter((posicion) => posicion !== revisaDatos);
        console.log(imgs);
        localStorage.removeItem(usuarios.nombre);
        localStorage.setItem(usuarios.nombre, JSON.stringify(imgs));
        window.location.reload();
      }
    }
  });
}
//crea elemento automatico

//guarda imagenes
let inputTitulo = document.getElementById("inputTitulo");

inputTitulo.addEventListener("change", () => {
  let archivo = inputTitulo.files[0];

  let leelo = new FileReader();

  leelo.addEventListener("load", () => {
    //inserta el objeto apenas el archvio entra al input type='file'
    let img = {
      Desc: descripcionImg.value,
      titulo: tituloImg.value,
      usuario: usuarios.nombre,
      imgs: leelo.result,
    };

    imgs.push(img);
    localStorage.setItem(usuarios.nombre, JSON.stringify(imgs));

    window.location.reload();
  });

  leelo.readAsDataURL(archivo);
});

//agarra archivos del local storage
