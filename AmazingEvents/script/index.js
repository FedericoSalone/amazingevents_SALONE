
import { eventsCards, createCategories, createCheckbox, filterSearch, filterCheckbox } from "./funciones.js";

//eventos
let $container = document.getElementById('card')
let $checkbox = document.getElementById("checkbox")
let $search = document.getElementById("search");
let data = [];
let categories = "";

async function getData() {
    const apiUrl = 'script/amazing.json';

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        eventsCards(data.events, $container);// imprimo las cards
        const categories = createCategories(data.events);// creo las categorias
        createCheckbox(categories, $checkbox);// imprimo los checkbox 
        $search.addEventListener('keyup', () => {
            const dataFilter = filterAndPrint(data.events);
            eventsCards(dataFilter, $container);
        });
        $checkbox.addEventListener('change', () => {
            const dataFilter = filterAndPrint(data.events);
            eventsCards(dataFilter, $container);
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();// obtencion datos de la api

const filterAndPrint = (array) => {
    let arrayFiltered = filterSearch(array, $search.value)
    arrayFiltered = filterCheckbox(arrayFiltered)
    return arrayFiltered
}



