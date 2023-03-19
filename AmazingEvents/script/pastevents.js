import { eventsCards, createCategories, createCheckbox, filterSearch, filterCheckbox } from "./funciones.js";

//eventos
let $container = document.getElementById('card');
let $checkbox = document.getElementById("checkbox");
let $search = document.getElementById("search");
let data = [];
let categories = "";
let filterDate = "2023-03-10"; // fecha de referencia para filtrar eventos

const filterAndPrint = (array) => {
    let arrayFiltered = filterSearch(array, $search.value);
    arrayFiltered = filterCheckbox(arrayFiltered);
    arrayFiltered = arrayFiltered.filter(event => {
        return event.date <= filterDate; // filtrar eventos que pasaron de la fecha de referencia
    });
    return arrayFiltered;
}

async function getData() {
    const apiUrl = '/script/amazing.json';

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const categories = createCategories(data.events);// creo las categorias
        createCheckbox(categories, $checkbox);// imprimo los checkbox 
        const dataFilter = filterAndPrint(data.events); // filtrar los eventos por fecha desde el principio
        eventsCards(dataFilter, $container); // mostrar solo los eventos que cumplen con los criterios de búsqueda
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


