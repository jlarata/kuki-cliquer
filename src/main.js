


var kukis=1;
var dinero=10;
var fer=2;
var primeracomida=true;
var primerasinkukis=true;
var trabajando=false;
var esfuerzo=0;

function inicio(){
  if (dinero == 1 || dinero == 0) {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dinero";
    } else {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dineros";
  }
  if (kukis == 1) {
  document.getElementById("cuantasKukis").innerHTML=kukis + " Kuki";
} else {
  document.getElementById("cuantasKukis").innerHTML=kukis + " Kukis";
}
};

function comerKuki() {
  if (kukis >=1) {
    if (primeracomida == true) {
      primeracomida = false;
      kukis = kukis -1;
      alert("Te comiste una Kuki. ¡Bien hecho!");
      if (kukis == 1) {
        document.getElementById("cuantasKukis").innerHTML=kukis + " Kuki";
        } else {
        document.getElementById("cuantasKukis").innerHTML=kukis + " Kukis";
        }
      } else {
        kukis = kukis -1;
        if (kukis == 1) {
          document.getElementById("cuantasKukis").innerHTML=kukis + " Kuki";
          } else {
            document.getElementById("cuantasKukis").innerHTML=kukis + " Kukis";
          }
        }
    } else if (primerasinkukis == true) {
      primerasinkukis = false;
      alert("No te quedan Kukis. ¡Bien!")
      alert("¿deberías comprar más?")
      document.getElementById("cajaCompra").style.visibility="visible";
      document.getElementById("botonCompra").classList.add("aparecer1");
    } else {
      alert("No te quedan Kukis. ¡Bien!")
      /*document.write("No te quedan Kukis. ¡Bien!");*/
    }
};

function comprarKuki() {
  if (fer == 2) {
  fer = 3;
  alert("comprar cuesta dineros")
  document.getElementById("botonCompra").innerHTML = "Comprar Kuki!";
  document.getElementById("botonCompra").classList.replace("aparecer1", "atenti1");
  document.getElementById("billetera").style.visibility="visible";
  document.getElementById("billetera").classList.add("aparecer1");
  } else {
  if (dinero >=1) {
  dinero = dinero -1
  kukis = kukis +1;

  if (kukis == 1) {
  document.getElementById("cuantasKukis").innerHTML=kukis + " Kuki";
} else {
  document.getElementById("cuantasKukis").innerHTML=kukis + " Kukis";
}

if (dinero == 1 || dinero == 0 ) {
  document.getElementById("cuantoDinero").innerHTML=dinero + " dinero";
  } else {
  document.getElementById("cuantoDinero").innerHTML=dinero + " dineros";
  }

} else {
alert("No te queda más dinero. ¡Buenísimo!");
document.getElementById("botonTrabajar").classList.add("aparecer2");
document.getElementById("smith").style.visibility="visible"
    }
  };
}

function trabajar() {
  document.getElementById("trabajomuyduro").style.visibility="visible";
  document.getElementById("textotrabajomuyduro").style.visibility="visible";
  document.getElementById("trabajomuyduro").classList.add("onirico");
  document.getElementById("textotrabajomuyduro").classList.add("latente");
  trabajoNoCalificado();
  }

function ganaDinero() {
  dinero = dinero +1;
/* Hace visible el botón esforzarse cuando se sume una cantidad de dinero*/
if (dinero >= 5) {
document.getElementById("botonEsforzarse").classList.add("aparecer2");
document.getElementById("botonEsforzarse").style.visibility="visible";
  }
/* Actualiza la billetera con singular dinero o plural dineros*/
  if (dinero == 1 || dinero == 0 ) {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dinero";
    } else {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dineros";
    }
  };

function trabajoNoCalificado() {
  if (trabajando == false) {
    trabajando = true;
    const dosSegundos = setInterval(ganaDinero, 2000);
    }
  }

function esforzarse() {

  /* Aquí podría hacer una segunda clase-animacion un poquito más a la derecha
  y una variable que se active y desactive para que cada click active una u otra
  eso daría probablemente más dinamismo al "no pasa nada" */
  esfuerzo = esfuerzo + 1;
  document.getElementById("noPasaNada").style.visibility="visible";
  document.getElementById("noPasaNada").classList.add("evanescente");
  const timeOutEsf = setTimeout(esforzarseout, 500);
  if (esfuerzo >= 12) {
    document.getElementById("botonEsforzarseMucho").style.visibility="visible";
    }
  }

function esforzarseout() {
  document.getElementById("noPasaNada").style.visibility="hidden";
  document.getElementById("noPasaNada").classList.remove("evanescente");
  }

function modofacil() {
  document.getElementById("cajaCompra").style.visibility="visible";
  document.getElementById("billetera").style.visibility="visible";
  document.getElementById("smith").style.visibility="visible";
  document.getElementById("trabajomuyduro").style.visibility="visible";
  document.getElementById("textotrabajomuyduro").style.visibility="visible";

  let cuantasKukisQueres = Number(prompt("cuántas kukis querés tener?"));
  let cuantoDineroQueres = Number(prompt("y cuánta guita, maestrx?"));
  kukis = cuantasKukisQueres;
  dinero = cuantoDineroQueres;
  document.getElementById("botonEsforzarse").style.visibility="visible";
  document.getElementById("botonEsforzarseMucho").style.visibility="visible";
  if (kukis == 1) {
  document.getElementById("cuantasKukis").innerHTML=kukis + " Kuki";
    } else {
  document.getElementById("cuantasKukis").innerHTML=kukis + " Kukis";
    }
  if (dinero == 1 || dinero == 0 ) {
  document.getElementById("cuantoDinero").innerHTML=dinero + " dinero";
  } else {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dineros";
  }
  alert("Bienvenidx al modo facil, tenés " + kukis + " Kukis y " +
  dinero + " dineros");
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
