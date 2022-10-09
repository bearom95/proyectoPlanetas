import {callPlanetCard} from '../planetCardComp/planetCardComp';

const divPrincipal = document.body.querySelector("#app");
export const initSmall = () => {
  getSmall(); 
};

const getSmall = async () => {
  try {
    const response = await fetch("http://localhost:3000/smallPlanets");
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

  printSmall(dataToPrint);
};


const printSmall = (arrayMappeado) => { //evento es el parametro de la funcion, el evento es un objeto
  document.addEventListener("click", (evento) => {
    const planet = arrayMappeado.find(element => element.name === evento.path[0].className)
    callPlanetCard(planet)
  })
        divPrincipal.innerHTML = "";
          arrayMappeado.forEach((element) => {
            divPrincipal.innerHTML += `
                <div class="divBtnPlanet">
                  <button class="btnPlanet" type="button"><img class="${element.name}" src=${element.image}></button>
                </div> `;
          });

};



