let btnPrueba = document.getElementById("btnPrueba");
let nombre = document.getElementById("nombre");

const registroNombre = () => {
  console.log("entro");
  let nombre = prompt("Digite nombre por favor: ");
  this.nombre.innerHTML = "Nombre: " + nombre;
};

btnPrueba.onclick = () => {
  registroNombre();
};
