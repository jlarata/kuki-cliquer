


var Kukis=1;
var Dinero=10;
var Fer=2;
var Trabajando=0;

function inicio(){
  document.getElementById("cuantoDinero").innerHTML=Dinero + " dineros";
  if (Kukis == 1) {
  document.getElementById("cuantasKukis").innerHTML=Kukis + " Kuki";
} else {
  document.getElementById("cuantasKukis").innerHTML=Kukis + " Kukis";
}
};

function comerKuki() {
  if (Kukis >=1) {
  Kukis = Kukis -1;
alert("Te comiste una Kuki. ¡Bien hecho!");

if (Kukis == 1) {
document.getElementById("cuantasKukis").innerHTML=Kukis + " Kuki";
} else {
document.getElementById("cuantasKukis").innerHTML=Kukis + " Kukis";
}

} else {
  alert("No te quedan Kukis. ¡Bien!")
  alert("¿deberías comprar más?")
  document.getElementById("cajaCompra").style.visibility="visible";}
};

function comprarKuki() {
  if (Fer == 2) {
  Fer = 3;
  alert("comprar cuesta dineros")
  document.getElementById("botonCompra").innerHTML = "Comprar Kuki!";
  document.getElementById("billetera").classList.add("aparecer");
  document.getElementById("billetera").style.visibility="visible"
  } else {
  if (Dinero >=1) {
  Dinero = Dinero -1
  Kukis = Kukis +1;

  if (Kukis == 1) {
  document.getElementById("cuantasKukis").innerHTML=Kukis + " Kuki";
} else {
  document.getElementById("cuantasKukis").innerHTML=Kukis + " Kukis";
}

document.getElementById("cuantoDinero").innerHTML=Dinero + " dineros";
} else {
alert("No te queda más dinero. ¡Buenísimo!");
document.getElementById("botonTrabajar").classList.add("aparecer2");
document.getElementById("smith").style.visibility="visible"
    }
  };
}

function trabajar() {

  Trabajando = 1;
  document.getElementById("trabajomuyduro").style.visibility="visible";
  document.getElementById("trabajomuyduro").classList.add("onirico");
  trabajoNoCalificado();
  }

function ganaDinero() {
  Dinero = Dinero +1;
  document.getElementById("cuantoDinero").innerHTML=Dinero + " dineros";
};

function trabajoNoCalificado() {
  const dosSegundos = setInterval(ganaDinero, 2000);
  }





  function color(){
      rand1 = Math.floor(Math.random() * ((99- 10) + 1)) + 10
      rand2 = Math.floor(Math.random() * ((99- 10) + 1)) + 10
      rand3 = Math.floor(Math.random() * ((99- 10) + 1)) + 10
      concatenado = rand1.toString() + rand2.toString() + rand3.toString()
      var color = "#" + concatenado
      document.body.style.background = color;
    };

  function argh() {
      document.body.style.background = "#ffffff"
    };


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
