import './style.css'
import {initHeader} from "./components/header/headerComp";
import { initSmall } from './components/smallPlanets/smallPlanetsComp';
import { initBig } from './components/bigPlanetas/bigPlanetsComp';
import { callPlanetCard } from './components/planetCardComp/planetCardComp';



//Creamos una constante cabecera, que se refiere al header del HTML, y hacemos que su innerHTML sea el initHeader.
//(Podríamos quitar esta linea de abajo y a cabecera.innerHTML igualarlo directamente a initHeader). 
//La funcion initHeader la tenemos definida en el headerComp.js y lo que hace es que ... no entiendo bien lo 
//que hace esa funcion, pero sí veo que añade en un template los botones

const cabecera = document.querySelector("header");
cabecera.innerHTML = initHeader();   

//Los eventos de los botones tienen que estar en el main (, al no estar creado en el index, no s epuede crear el evento a la vez)
const smallbtn = document.querySelector("#btnSmall");
smallbtn.addEventListener("click", initSmall);

const bigbtn = document.querySelector("#btnBig");
bigbtn.addEventListener("click", initBig);

const planetbtn = document.querySelector("#btnPlanet");
planetbtn.addEventListener("click", callPlanetCard());


