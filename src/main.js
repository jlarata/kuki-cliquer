


var kukis=1;
var dinero=10;
var fer=2;
var primeracomida=true;
var primerasinkukis=true;
var trabajando=false;
var esfuerzo=0;
var trabajandodobleturno=false;
var horasextra=1;




function inicio(){

/* bloque ACTUALIZA. actualiza la visualización de la billetera y  el contador
 de kukis, prestando atención a singulares y plurales. */

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

/* función que devuelve ubicación del mouse dentro de un elemento. así como está
lo habiita dentro del footer en inicio, pero se puede meter dentro de una función
activable */

document.getElementById('footer').onclick = function clickEvent(cartelspam) {
      var rect = cartelspam.target.getBoundingClientRect();
      var x = cartelspam.clientX - rect.left; //x position within the element.
      var y = cartelspam.clientY - rect.top;  //y position within the element.

      document.getElementById("cajaPruebas").style.marginLeft = x+"px";
      document.getElementById("cajaPruebas").style.marginTop = y+"px";
      document.getElementById("cajaPruebas").style.visibility = "visible";
    }

/* misma función, ahora dentro del botón esforzarse mucho para que aparezca el
cartelito +1 y se anime donde esté el mouse. ¿es más prolijo pner esto oninit o
dentro de una función activable? */

document.getElementById('botonEsforzarseMucho').onclick = function clickEvent(masuno) {
  var rect = masuno.target.getBoundingClientRect();
  var x = masuno.clientX - rect.left; //x position within the element.
  var y = masuno.clientY - rect.top;  //y position within the element.
  document.getElementById("ganamasuno").style.marginLeft = x+"px";

  document.getElementById("ganamasuno").style.marginBottom = "2"*y+"px";
  document.getElementById("ganamasuno").classList.add("evanescente");
  document.getElementById("ganamasuno").style.visibility = "visible";

  animaganamasuno();
  esforzarseMucho();
  }


};




function comerKuki() {
  if (kukis >=1) {
    if (primeracomida == true) {
      primeracomida = false;
      kukis = kukis -1;
      alert("Te comiste una Kuki. ¡Bien hecho!");

/* bloque ACTUALIZA */

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
      alert("No te quedan Kukis. ¡Deberías conseguir más!")
/* visibiliza el botón de compra, que entra con texto "conseguir"  */
      document.getElementById("botonCompra").style.visibility="visible";
      document.getElementById("botonCompra").classList.add("aparecer1");
    } else {
      alert("No te quedan Kukis. ¡Bien!")
      }
};

function comprarKuki() {

  /* la primera vez: aviso de que gastarás dinero, visualización de billetera,
  modificación del texto del botón de CONSEGUIR a comprar. ¿conciencia +1? */
  if (fer == 2) {
  fer = 3;
  alert("comprar cuesta dineros")
  document.getElementById("botonCompra").innerHTML = "Comprar Kuki!";
  document.getElementById("botonCompra").classList.replace("aparecer1", "atenti1");
  document.getElementById("billetera").style.visibility="visible";
  document.getElementById("billetera").classList.add("aparecer1");
  } else {

  /* crea una variable con el input de compra */
    var comprarcuantas = document.getElementById("comprarcantidad").value;

/* no se puede comprar si se tiene menos de 1 dinero (no se chequea contra
comprarcantidad porque su value por defecto es 0) */

    if (dinero >= 1) {

/* chequea el display del input de compra. si es none compra de a 1, sino, lo usa */
      if (document.getElementById("comprarcantidad").style.display=="none") {
          dinero = dinero -1;
          kukis = +kukis +1;
        } else if (dinero >= comprarcuantas) {
            dinero = dinero -comprarcuantas;
            kukis = +kukis + +comprarcuantas;
            } else {
            alert("Estás queriendo comprar más de lo que te alcanza con tus dineros");
            }

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

          /* habiita caja citas, primer trabajo y comer y comprar cantidad*/

          alert("No te queda más dinero. ¡Buenísimo!");
          document.getElementById("botonTrabajar").classList.add("aparecer3");
          document.getElementById("smith").classList.add("aparecer2");
          document.getElementById("smith").style.visibility="visible"
          document.getElementById("comprarcantidad").style.display=null;
          document.getElementById("comercantidad").style.display=null;
          tiempocaja = setTimeout(abrircajas, 0001);
           function abrircajas() {
             document.getElementById("comprarcantidad").style.width="50%";
             document.getElementById("comercantidad").style.width="60%";
         }
          }
        };
      }

function trabajar() {
/* activa las animaciones y dispara la función trabajonocalificado que,
a su vez, activa ganardinero() con valor 2 y un setinterval

luego de presionado, este botón está al pedo. ¿hacerlo desaparecer? ¿achicarse? */

  document.getElementById("trabajomuyduro").style.display="block";
  document.getElementById("textotrabajomuyduro").style.visibility="visible";
  document.getElementById("trabajomuyduro").classList.add("onirico");
  document.getElementById("textotrabajomuyduro").classList.add("latente");
  trabajoNoCalificado();
  }

function ganaDinero(salario) {
  dinero = dinero + salario;
/* Hace visible el botón esforzarse cuando se sume una cantidad de dinero*/
if (dinero >= 5 && esfuerzo <= 6) {
document.getElementById("cajabotonesforzarse").classList.add("aparecer1");
document.getElementById("cajabotonesforzarse").style.display=null;
document.getElementById("botonEsforzarse").classList.add("aparecer1");
document.getElementById("botonEsforzarse").style.display=null;
  }
/* caja ACTUAIZA */
  if (dinero == 1 || dinero == 0 ) {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dinero";
    } else {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dineros";
    }
  };

/* primer trabajo */

function trabajoNoCalificado() {
  if (trabajando == false) {
      trabajando = true;
      dosporsegundo = setInterval(ganaDinero, 1000, 2);
    }
  }

/* segundo trabajo */

function trabajoDurisimo() {
  if (trabajandodobleturno == false) {
    trabajandodobleturno = true;
    document.getElementById("cajasegundotrabajo").style.display="block";
    document.getElementById("trabajoentregas").classList.add("onirico");
    document.getElementById("textodelivery").classList.add("latente");
    dosmasporsegundo = setInterval(ganaDinero, 500, 1);
    }
  }

/* NO IMPLEMENTADO. la idea es que frene un trabajo en curso y dispare
la función ganardinero con otro setinterval y otro valor */

function trabajoCalificado() {
  clearInterval(dosporsegundo);
  clearInterval(dosmasporsegundo);
  trabajando = false;
  trabajandodobleturno = false;
  }

/* esforzarse no cambia nada. ¿conciencia +1? sumado suficiente esfuerzo
(¿debería ser conciencia?) aparece a opción de esforzarse _mucho_ y desaparece
 la opción esforzarse.  */

function esforzarse() {

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

/*  suma un dinero por click y eventualmente da display a la caja de trabajo B.
 nótese que la animación +1 no se dispara desde dentro de esta función sino que ya está en el onInit */

function esforzarseMucho() {
  esfuerzo = esfuerzo + 1;
  dinero = dinero + horasextra;
/* caja ACTUALIZA */
  if (dinero == 1 || dinero == 0 ) {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dinero";
    } else {
    document.getElementById("cuantoDinero").innerHTML=dinero + " dineros";
    }
/* sumada suficiente variable esfuerzo, aparece el botón de esforzarse _mucho_ */

  if (esfuerzo >= 20) {
    document.getElementById("cajabotonesforzarse").style.display="none";
    document.getElementById("botonEsforzarse").style.display="none";
    }

  if (esfuerzo >= 30) {
    document.getElementById("cajatrabajoB").style.display=null;
    document.getElementById("botontrabajoB").style.display=null;
    document.getElementById("botontrabajoB").classList.add("atenti1");
    }
  };

function animaganamasuno() {

  document.getElementById("ganamasuno").style.visibility="visible";
  document.getElementById("ganamasuno").classList.add("evanescente");
  const timeOutmasuno = setTimeout(animaganamasunoout, 500);
    }

function animaganamasunoout() {
  document.getElementById("ganamasuno").style.visibility="hidden";
  document.getElementById("ganamasuno").classList.remove("evanescente");
  }



/* habilita los cheats. */

function desarrollo() {
  let passwd = String(prompt("contraseña!"))
  if (passwd=="ocho"){
  document.getElementById("desarrollo").style.display="block";
  document.getElementById("footer").style.border="0.5px solid #000";


/* por algún motivo la animación con transición de las cajas de compra no
 funcionaron hasta que tuvieron un mínimo delay que provee el settimeout*/

  document.getElementById("comprarcantidad").style.display=null;
  document.getElementById("comercantidad").style.display=null;
  tiempocaja = setTimeout(abrircajas, 0001);
   function abrircajas() {
     document.getElementById("comprarcantidad").style.width="50%";
     document.getElementById("comercantidad").style.width="60%";
 }

/* poner borde a todos los elementos con la clase rowestructural*/

  var estructurales = document.querySelectorAll('.rowestructural');
  for(var i=0; i<estructurales.length; i++){
      estructurales[i].style.border = "0.5px solid #000";
      }

/*sacar caja enceuno*/
  var encompu = document.querySelectorAll('.enceluno');
  for(var i=0; i<encompu.length; i++){
      encompu[i].style.display="none";
      }


  }
}

function modofacil() {

  let cuantasKukisQueres = Number(prompt("cuántas kukis querés tener?"));
  let cuantoDineroQueres = Number(prompt("y cuánta guita, maestrx?"));
  kukis = cuantasKukisQueres;
  dinero = cuantoDineroQueres;

  document.getElementById("botonCompra").style.visibility="visible";
  document.getElementById("billetera").style.visibility="visible";
  document.getElementById("smith").classList.add("aparecer2");
  document.getElementById("smith").style.visibility="visible";
  document.getElementById("trabajomuyduro").style.display="block";
  document.getElementById("textotrabajomuyduro").style.visibility="visible";
  document.getElementById("cajatrabajoB").style.display=null;
  document.getElementById("botontrabajoB").style.display=null;
  document.getElementById("cajasegundotrabajo").style.display=null;
    document.getElementById("cajabotonesforzarse").style.display=null;
  document.getElementById("botonEsforzarse").style.display=null;
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
