import { initSmall } from "../smallPlanets/smallPlanetsComp";
export const initHeader = ()=> {
const header = document.body.querySelector("#header");
header.innerHTML = `
<nav>
    <button class="btn" id="btnSmall">Small Planets</button>
    <button class="btn" id="btnBig">Big Planets</button>
</nav>
`

const btnSmall = document.body.querySelector("#btnSmall");
btnSmall.addEventListener("click", initSmall());

document.body.querySelector("#btnBig").addEventListener("click", console.log("planetas grandes")) 

}


