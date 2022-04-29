


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

  function color(){
      rand1 = Math.floor(Math.random() * ((99- 10) + 1)) + 10
      rand2 = Math.floor(Math.random() * ((99- 10) + 1)) + 10
      rand3 = Math.floor(Math.random() * ((99- 10) + 1)) + 10
      concatenado = rand1.toString() + rand2.toString() + rand3.toString()
      var color = "#" + concatenado
      document.body.style.background = color;
      }


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
