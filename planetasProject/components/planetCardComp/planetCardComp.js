
//crear funcion que nos sustituya el div principal por la info de ese planeta, como parametro tendrá el planeta
//El boton en SmallPlanets tiene un evento que al hacer click llame a la funcion CallPLanetCard

export const callPlanetCard = (planeta) => {
    const divPrincipal = document.body.querySelector("#app");
    divPrincipal.innerHTML = "",
    divPrincipal.innerHTML= `
        <div class="planetCardDiv">
            <h2>${planeta.name}</h2>
            <h3>${planeta.diameter}</h3>
            <h3>${planeta.lengthDay}</h3>
            <h3>${planeta.temperature}</h3>
            <img class="${planeta.name}" src=${planeta.image}>
        </div>`
}
