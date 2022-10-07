import './style.css'
/* import { initSmall } from './components/smallPlanets/smallPlanetsComp'; */
import {initHeader} from "./components/header/headerComp";
/* initSmall() */
initHeader()


//document.querySelector('#app').innerHTML = ``

//componente Games.js de antonio
/* import { getData } from "../../services/services";     
import { GameCard } from "../../components/GameCard/GameCard";

const getGames = async () => {
  const games = await getData("games");
  printGames(games);
};

const printGames = (games) => {
  const container = document.createElement("div");
  container.classList.add("games-container");
  for (const game of games) {
    container.innerHTML += GameCard(game);
  }

  const mainContainer = document.querySelector("#app");
  mainContainer.innerHTML = "";
  mainContainer.appendChild(container);
};

export const Games = () => {
  getGames();
}; */