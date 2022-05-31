


var kukis=1;
var dinero=3;
var fer=2;
var primeracomida=true;
var primerasinkukis=true;
var trabajando=false;
var esfuerzo=0;
var trabajandodobleturno=false;
var horasextra=1;


const cuantoDinero=document.getElementById("cuantoDinero");
const cuantasKukis=document.getElementById("cuantasKukis");
const cajaBotonEsforzarse=document.getElementById("cajabotonesforzarse");
const botonEsforzarse=document.getElementById("botonEsforzarse");
const cajaTrabajoB=document.getElementById("cajatrabajoB");
const botonTrabajoB=document.getElementById("botontrabajoB");
const cajaEsfMucho=document.getElementById("cajaesforzarsemucho");
const botonEsfMucho=document.getElementById("botonEsforzarseMucho");
const cartelNopasanada=document.getElementById("noPasaNada");

function inicio(){

/* bloque ACTUALIZA. actualiza la visualización de la billetera y  el contador
 de kukis, prestando atención a singulares y plurales. */
actualizarConPluralOSingular(cuantoDinero, dinero, 'dinero');
actualizarConPluralOSingular(cuantasKukis, kukis, 'kuki');

};





function cartelinfonoche() {
  document.getElementById('cajanoche').style.display="block";
  document.getElementById('cajanoche').style.visibility="visible";
  tiempitoB = setTimeout(abrircaja, 100);
   function abrircaja() {
  document.getElementById('cajanoche').style.opacity=1;
  }
}

function cartelinfonocheout() {
  document.getElementById('cajanoche').style.opacity=0;
  tiempitoA = setTimeout(cerrarcaja, 1500);
   function cerrarcaja() {
     document.getElementById('cajanoche').style.visibility="hidden";
     document.getElementById('cajanoche').style.display="none";
   }
}



function comerKuki() {
  if (kukis >=1) {
    if (primeracomida == true) {
      primeracomida = false;
      kukis = kukis -1;
      spam2(`Comiste una Kuki. ¡Bien hecho!`);

actualizarConPluralOSingular(cuantasKukis, kukis, 'kuki');

      } else {

        /* crea una variable con el input de compra */
        var comercuantas = document.getElementById("comercantidad").value;

        /* chequea el display del input de comer. si es none compra de a 1, sino, lo usa */
              if (document.getElementById("comercantidad").style.display=="none") {
                  kukis = kukis -1;
                } else if (kukis >= comercuantas) {
                    kukis = +kukis -comercuantas;
                    } else {
                    alert("Estás queriendo comer más kukis de las que tenés");
                    }
      actualizarConPluralOSingular(cuantasKukis, kukis, 'kuki');

        }
    } else if (primerasinkukis == true) {
      primerasinkukis = false;
      spam2(`No te quedan Kukis. ¡Deberías conseguir más!`);

/* visibiliza el botón de compra, que entra con texto "conseguir"  */
      document.getElementById("botonCompra").style.visibility="visible";
      document.getElementById("botonCompra").classList.add("aparecer1");
    } else {
      spam2(`No te quedan Kukis. ¡Bien!`);
      }
};







function comprarKuki() {

  /* la primera vez: aviso de que gastarás dinero, visualización de billetera,
  modificación del texto del botón de CONSEGUIR a comprar. ¿conciencia +1? */
  if (fer == 2) {
  fer = 3;
  spam2(`Comprar cuesta dineros...`);
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

            actualizarConPluralOSingular(cuantoDinero, dinero, 'dinero');
            actualizarConPluralOSingular(cuantasKukis, kukis, 'kuki');

        } else {

          /* habiita caja citas, primer trabajo y comer y comprar cantidad*/

          spam2(`No te queda más dinero. ¡Buenísimo!`);
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
cajaBotonEsforzarse.style.width="30%";
cajaBotonEsforzarse.style.opacity="1";
botonEsforzarse.classList.add("aparecer1");
botonEsforzarse.style.display=null;
botonEsforzarse.style.fontSize="100%";
botonEsforzarse.style.width="100%";
  }
/* caja ACTUAIZA */
actualizarConPluralOSingular(cuantoDinero, dinero, 'dinero');
}
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
    document.getElementById("body").classList.add("amanecer");

    /*página modo noche*/
    var cosc = document.querySelectorAll('.btn');
    for(var i=0; i<cosc.length; i++){
        cosc[i].style.background= "#B8B8BC"
        }
    document.getElementById("textotrabajomuyduro").style.color="8E8A8D";
    document.getElementById("textodelivery").style.color="8E8A8D";
    document.getElementById("comercantidad").style.background="#B8B8BC";
    document.getElementById("comprarcantidad").style.background="#B8B8BC";
    document.getElementById("body").classList.add("noche");

    /*resto de la función*/

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

  pausanias(200);

  esfuerzo = esfuerzo + 1;
  cartelNopasanada.style.visibility="visible";
  cartelNopasanada.classList.add("evanescente");
    const timeOutEsf = setTimeout(esforzarseout, 500);
  if (esfuerzo >= 12) {

    cajaEsfMucho.style.width="30%";
    cajaEsfMucho.style.opacity="1";
    botonEsfMucho.style.display=null;
    botonEsfMucho.style.fontSize="100%";
    botonEsfMucho.style.width="100%";
    botonEsfMucho.style.opacity="1";

    }
  }

function esforzarseout() {
  cartelNopasanada.style.visibility="hidden";
  cartelNopasanada.classList.remove("evanescente");
  }

/*  suma un dinero por click y eventualmente da display a la caja de trabajo B.
 nótese que la animación +1 no se dispara desde dentro de esta función sino que ya está en el onInit */

function esforzarseMucho() {

/*  dentro del botón esforzarse mucho aparece el"+12 y se anima donde esté el
 mouse onclick. ¿es más prolijo pner esto oninit o dentro de una función activable? */

  document.getElementById('botonEsforzarseMucho').onclick = function clickEvent(masuno) {

    pausanias(100);

    esfuerzo = esfuerzo + 1;
    dinero = dinero + horasextra;
  /* caja ACTUALIZA */

  actualizarConPluralOSingular(cuantoDinero, dinero, 'dinero');


    var rect = masuno.target.getBoundingClientRect();
    var x = masuno.clientX - rect.left; //x position within the element.
    var y = masuno.clientY - rect.top;  //y position within the element.
    document.getElementById("ganamasuno").style.marginLeft = x+"px";
    document.getElementById("ganamasuno").style.marginBottom = "2"*y+"px";
    document.getElementById("ganamasuno").classList.add("evanescente");
    document.getElementById("ganamasuno").style.visibility = "visible";
    const timeOutmasuno = setTimeout(animaganamasunoout, 250);

/* sumada suficiente variable esfuerzo, desaparece el botón de esforzarse y luego
aparece el de trabajar de noche */

  if (esfuerzo >= 20) {
    /*document.getElementById("cajabotonesforzarse").style.display="none";
    document.getElementById("botonEsforzarse").style.display="none";*/
    cajaBotonEsforzarse.style.width="0%";
    cajaBotonEsforzarse.style.opacity="0";
    botonEsforzarse.style.fontSize="0%";
    botonEsforzarse.style.width="0%";
    botonEsforzarse.style.opacity="0";
    tiempoBotonEsforzarseOut = setTimeout(cerrarCBE, 1800);
     function cerrarCBE() {
      botonEsforzarse.style.display="none";
      cajaBotonEsforzarse.style.display="none";
      }
    }
  if (esfuerzo >= 30) {

    /*cajaTrabajoB.style.display=Null;*/
    cajaTrabajoB.style.width="30%";
    cajaTrabajoB.style.opacity="1";
    botonTrabajoB.style.display=null;
    botonTrabajoB.style.fontSize="100%";
    botonTrabajoB.style.width="100%";
    botonTrabajoB.style.opacity="1";

  /*  document.getElementById("cajatrabajoB").style.display=null;
    document.getElementById("botontrabajoB").style.display=null;
    document.getElementById("botontrabajoB").classList.add("atenti1");*/
      }
  };

}

function animaganamasunoout() {
  document.getElementById("ganamasuno").classList.remove("evanescente");
  document.getElementById("ganamasuno").style.visibility="hidden";
  }

/* updates both kukis and dinero input-fields. adds a "s" string in the end if
the variable is plural (plural being: 2) */

function actualizarConPluralOSingular(domElement, numberVariable, word) {
  numberVariable < 2
  ? domElement.innerHTML = numberVariable + ` ${word}`
  : domElement.innerHTML = numberVariable + ` ${word}s`;
}

/* to stop fast-múltiple-spam by just pressing enter. next function disables both
buttons by id. sadly, when deactivated, buttons get unselected so it is also
impossible to slowly múltiple spam by pressing enter =( */

function pausanias(tiempo) {
  botonEsforzarse.disabled=true;
  botonEsfMucho.disabled=true;
  var tiempoPausa = setTimeout(pausaniasout, tiempo);
}

function pausaniasout(tiempo) {
  botonEsforzarse.disabled=false;
  botonEsfMucho.disabled=false;
  }

/* two different-styled spam-message coming from the mid-bottom of the screen
 and three different methods to remove them */

function spam1() {
  spm = document.createElement("div");
  spm.classList.add("cartel01");
  node = document.createTextNode("lalala dale boke.");
  spm.appendChild(node);
  document.getElementById("cartelera").appendChild(spm);
  coso = setTimeout(cartelin, 0003);
  function cartelin() {
    spm.style.height="16vh";
    }
  }

function spam2(texto) {
  spm2 = document.createElement("div");
  spm2.classList.add("cartel02");
  spm2.setAttribute("onclick","properSpamOut(this)");
  spm2.style.cursor="pointer";
  node2 = document.createTextNode(texto);
  spm2.appendChild(node2);
  document.getElementById("cartelera").appendChild(spm2);
  coso = setTimeout(cartelin2, 0005);
  function cartelin2() {
    spm2.style.height="16vh";
    }
  }

/* Former Spam Function, creating and appending a div element (x) and setting
in that element the atribute onClick=properSpamOut() that close the Parent Spam
Includes the former properSpamOut function.


function spam2(texto) {
  spm2 = document.createElement("div");
  spm2.classList.add("cartel02");
  node2 = document.createTextNode(texto);
  spm2.appendChild(node2);
  document.getElementById("cartelera").appendChild(spm2);
  coso = setTimeout(cartelin2, 0005);
  function cartelin2() {
    spm2.style.height="16vh";
    }
    xSignOut = setTimeout(xSign, 0005);
    function xSign() {
    spmX = document.createElement("div");
    spmX.classList.add("xx");
    spmX.setAttribute("onclick","properSpamOut(this)");
    node3=document.createElement("img");
    node3.src="src/img/X.png";
    spmX.appendChild(node3);
    spm2.appendChild(spmX);}
  }

  function properSpamOut(ej) {
    ej.parentElement.remove();
    }


  */



function spamout() {
	const list = document.getElementById("cartelera");
	list.removeChild(list.firstElementChild);
  }

function spamoutb() {
  const list = document.getElementById("cartelera");
  list.removeChild(list.lastElementChild);
  }

function spamoutAll() {
  var e = document.getElementById("cartelera");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
      child = e.lastElementChild;
    }
  }

  function properSpamOut(ej) {
    ej.remove();
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
  cajaTrabajoB.style.width="30%";
  cajaTrabajoB.style.opacity="1";
  botonTrabajoB.style.display=null;
  botonTrabajoB.style.fontSize="100%";
  botonTrabajoB.style.width="100%";
  botonTrabajoB.style.opacity="1";
  document.getElementById("cajasegundotrabajo").style.display=null;

  cajaBotonEsforzarse.style.width="30%";
  cajaBotonEsforzarse.style.opacity="1";
  botonEsforzarse.classList.add("aparecer1");
  botonEsforzarse.style.display=null;
  botonEsforzarse.style.fontSize="100%";
  botonEsforzarse.style.width="100%";

  cajaEsfMucho.style.width="30%";
  cajaEsfMucho.style.opacity="1";
  botonEsfMucho.style.display=null;
  botonEsfMucho.style.fontSize="100%";
  botonEsfMucho.style.width="100%";
  botonEsfMucho.style.opacity="1";


  actualizarConPluralOSingular(cuantoDinero, dinero, 'dinero');
  actualizarConPluralOSingular(cuantasKukis, kukis, 'kuki');
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



  /* la vieja función de actualizar plural o singular:  if (dinero == 1 || dinero == 0) {
      cuantoDinero.innerHTML=dinero + " dinero";
      } else {
      cuantoDinero.innerHTML=dinero + " dineros";
    }
    if (kukis == 1) {
    cuantasKukis.innerHTML=kukis + " Kuki";
  } else {
    cuantasKukis.innerHTML=kukis + " Kukis";
  }*/


  /* función que devuelve ubicación del mouse dentro de un elemento. estaba originalmente
  dentro del footer en inicio, pero se puede meter dentro de una función activable

  document.getElementById('footer').onclick = function clickEvent(cartelspam) {
        var rect = cartelspam.target.getBoundingClientRect();
        var x = cartelspam.clientX - rect.left; //x position within the element.
        var y = cartelspam.clientY - rect.top;  //y position within the element.

        document.getElementById("cajaPruebas").style.marginLeft = x+"px";
        document.getElementById("cajaPruebas").style.marginTop = y+"px";
        document.getElementById("cajaPruebas").style.visibility = "visible";
      } */


/* primeros intentos de cajas spam

      function cierracaja1() {
        document.getElementById("cartel01").style.height="0vh";
        cosu = setTimeout(cartelon, 0003);
        function cartelon() {
          document.getElementById("cartel01").style.display="none";
        }
      }

      function cierracaja2() {
        document.getElementById("cartel02").style.height="0vh";
        cosu = setTimeout(cartelon, 0003);
        function cartelon() {
          document.getElementById("cartel02").style.display="none";
        }
      } */
