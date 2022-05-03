


var kukis=1;
var dinero=10;
var fer=2;
var primeracomida=true;
var primerasinkukis=true;

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
  document.getElementById("billetera").classList.add("aparecer");
  document.getElementById("billetera").style.visibility="visible"
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
  if (dinero == 1 || dinero == 0 ) {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dinero";
    } else {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dineros";
    }
  };

function trabajoNoCalificado() {
  const dosSegundos = setInterval(ganaDinero, 2000);
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
