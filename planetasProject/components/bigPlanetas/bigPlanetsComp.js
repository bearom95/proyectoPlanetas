import {callPlanetCard} from '../planetCardComp/planetCardComp';


const divPrincipal = document.body.querySelector("#app");
export const initBig = () => {
  getBig(); 
};

const getBig = async () => {
  try {
    const response = await fetch("http://localhost:3000/BigPlanets");
    const dataToJson = await response.json();
    transformData(dataToJson);
  } catch (error) {
    console.log(error);
  }
};

const transformData = (data) => {
  const dataToPrint = data.map((element) => {
    return {
      id: element.id,
      name: element.name,
      diameter: element.diameter,
      lengthDay: element.lengthDay,
      temperature: element.temperature,
      image: element.image,
    };
  });

  printBig(dataToPrint);
};

const printBig = (arrayMappeado) => {
  document.addEventListener("click", (evento) => {
    const planet = arrayMappeado.find(element => element.name === evento.path[0].className)
    callPlanetCard(planet)
  })

        divPrincipal.innerHTML = "";
          arrayMappeado.forEach((element) => {
            divPrincipal.innerHTML += `
                <div>
                  <button class="btnPlanet" type="button">
                  <img class="${element.name}" src=${element.image}></button>
                </div>
                `;
          });
    };
