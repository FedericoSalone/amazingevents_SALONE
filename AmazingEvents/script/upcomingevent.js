//data
import data from './datoscards.js';


//eventos
let $container = document.getElementById('card')
let $checkbox = document.getElementById("checkbox")
let $search = document.getElementById("search");
//cards
const fragment = document.createDocumentFragment();
const eventsCards = (array, container) => {
    container.innerHTML = ""
    array.forEach(cards => {
        let div = document.createElement('div');
        div.className = 'card card-index'
        div.style = 'width: 18rem; height: 25rem';
        div.innerHTML = `
            <img class="card-img-top" src="${cards.image}"/>
            <div class="card-body">
            <h4 style="color:#ffffff">${cards.name.toLowerCase()}</h4>
            <p>${cards.category}</p>
            <button class="card-button"><a href="/pages/details.html?id=${cards._id}">SEE MORE</a></button>
            </div>   
        
        `
        fragment.appendChild(div);

    })
    if(array.length == 0){
        container.innerHTML = `
        <h4 style= "color:#ffffff"> No se encontraron resultados </h4>
        `
}
container.appendChild(fragment);
}
eventsCards(data.events, $container);





//categorias
const createCategories = (array) => {
    let categories = array.map(e => e.category)

    categories = categories.reduce((acumulet, elemento) => {
        if (!acumulet.includes(elemento)) {
            acumulet.push(elemento);
        }
        return acumulet
    }, [])
    return categories
}

let categories = createCategories(data.events)

//Checbox dinamicos
const createCheckbox = (array, container) => {
    array.forEach(category => {
        let div = document.createElement('div')
        div.className = `checkbox-container ${category.toLowerCase()}`
        div.innerHTML = `
        <input type="checkbox" id="${category.toLowerCase()}" name="category"/>
        <label for="${category.toLowerCase()}">${category}</label>
        
        `
        container.appendChild(div)
    })
}
createCheckbox(categories, $checkbox)

//filtros 

const filterSearch = (array, value) => {
    let filteredArray = array.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
    return filteredArray
}

const filterCheckbox = (array) => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let filteredArray = array
    if (checked.length > 0) {
        filteredArray = [];
        for(let i=0; i<checked.length; i++){

            filteredArray = filteredArray.concat(array.filter(element => element.category.toLowerCase().includes(checked[i].id.toLowerCase())))
        }
    }
    return filteredArray
}


const filterAndPrint = (array) => {

    let arrayFiltered = filterSearch(array, $search.value)
    arrayFiltered = filterCheckbox(arrayFiltered)
    return arrayFiltered
}

$search.addEventListener('keyup', () => {
    let dataFilter = filterAndPrint(data.events)

    eventsCards(dataFilter, $container)
})

$checkbox.addEventListener("change", () => {
    let dataFilter = filterAndPrint(data.events)

    eventsCards(dataFilter, $container)
})