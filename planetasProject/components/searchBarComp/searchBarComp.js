

//EJEMPLO BUSCANDOR ANTONIO
 //Lista original 
const list = ["Huevo", "Pan", "Lechuga", "Tomate"];

//Recuperamos contenedor del html
const app = document.querySelector("#app");

//Recuperamos input de html
const input = document.querySelector("#search");

//Recupero el boton -> OPCION 2
const btn = document.querySelector("#searchbtn")

//Definimos funcion de busqueda a la cual le entra una palabra por parametro. Inicialmente esta palabra sera "" -> por lo cual se veran todos los items 
const searchList = (word) => {
  //Filtra la lista esperando que coincida con cada uno de los items en minuscula la palabra x en minuscula
  const filterdedList = list.filter((item) => item.toLowerCase().includes(word.toLowerCase()));
  //Vaciamos el contendor para que no pinte las cosas detras de otra
  app.innerHTML = "";
  //Recorro los items filtrados pintando ps en el contendor
  for (const item of filterdedList) {
    const p = <p>${item}</p>;

    app.innerHTML += p;
  }
};
//Le añadimos un evento al input, para que cada vez que cambie ejecute la funcion de nuevo pero por parametro le pasara el valor del input
input.addEventListener("input", () => searchList(input.value));

//Metodo alternativo con un boton
//btn.addEventListener("click", () => searchList(input.value))

//Inicialmente le pasamos un string vacio para que se pinte al completo la lista
searchList("")