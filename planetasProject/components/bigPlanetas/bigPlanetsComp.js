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

const printBig = async (arrayMappeado) => {
    try {
        divPrincipal.innerHTML = "";
          arrayMappeado.forEach((element) => {
            divPrincipal.innerHTML += `
                <div>
                  <h2>${element.name}</h2>
                  <h3>${element.diameter}</h3>
                  <h3>${element.lengthDay}</h3>
                  <h3>${element.temperature}</h3>
                  <img src=${element.image} width="130px" height="130px">
                </div>
                `;
          });
    } catch (error) {
        console.log(error)
    }
};
