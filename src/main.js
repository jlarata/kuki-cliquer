






var Kukis=3
function inicio(){
  document.getElementById("cuantasKukis").innerHTML=Kukis;
  }

function comerKuki() {
  if (Kukis >=1) {
  Kukis = Kukis -1;
alert("Te comiste una Kuki. ¡Bien hecho!");
document.getElementById("cuantasKukis").innerHTML=Kukis;
} else {
  alert("No te quedan Kukis. ¡Bien!");}}

/* LA FUNCIÓN DE BALLESTO let Numero = Number(prompt("Te comiste una Kuki"))
if (!Number.isNaN(Numero) && Numero != "") {
    alert("Bien")
} else {
    alert("Dale pelotudo")
    alert("Bueno, vamos de nuevo")
    let Letra =  prompt("Is this the real life?")
    if (Letra.toLowerCase() == "is this just fantasy?") {
        alert("Ta, te perdono")
    } else {
        alert("Cancelado")
        document.write("CANCELAAAAAAAADO")
    }
}
*/
