import './style.css'
import {initHeader} from "./components/header/headerComp";
import { initSmall } from './components/smallPlanets/smallPlanetsComp';
import { initBig } from './components/bigPlanetas/bigPlanetsComp';


const cabecera = document.querySelector("header");
cabecera.innerHTML = initHeader();   

const smallbtn = document.querySelector("#btnSmall");
smallbtn.addEventListener("click", initSmall);

const bigbtn = document.querySelector("#btnBig");
bigbtn.addEventListener("click", initBig);

const home = document.querySelector(".home");
home.addEventListener("click", () => window.location.reload());


