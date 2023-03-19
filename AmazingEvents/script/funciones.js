//cards
const fragment = document.createDocumentFragment();
export const eventsCards = (array, container) => {
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
    if (array.length == 0) {
        container.innerHTML = `
        <h4 style= "color:#ffffff"> No se encontraron resultados </h4>
        `
    }
    container.appendChild(fragment);
}

//categorias
export const createCategories = (array) => {
    let categories = array.map(e => e.category)

    categories = categories.reduce((acumulet, elemento) => {
        if (!acumulet.includes(elemento)) {
            acumulet.push(elemento);
        }
        return acumulet
    }, [])
    return categories
}

//Checbox dinamicos
export const createCheckbox = (array, container) => {
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

//filtros 

export const filterSearch = (array, value) => {
    let filteredArray = array.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
    return filteredArray
}

export const filterCheckbox = (array) => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let filteredArray = array
    if (checked.length > 0) {
        filteredArray = [];
        for (let i = 0; i < checked.length; i++) {

            filteredArray = filteredArray.concat(array.filter(element => element.category.toLowerCase().includes(checked[i].id.toLowerCase())))
        }
    }
    return filteredArray
}


//////////////////////////////////////Funciones tabla///////////////////////////////////////////////////////



// Función para encontrar el evento con el mayor % de asistencia
export function findEventWithHighestAttendancePercentage(events) {
    return events.reduce((highestAttendanceEvent, currentEvent) => {
        const highestAttendancePercentage = calculateAttendancePercentage(highestAttendanceEvent);
        const currentAttendancePercentage = calculateAttendancePercentage(currentEvent);

        return currentAttendancePercentage > highestAttendancePercentage ? currentEvent : highestAttendanceEvent;
    }, events[0]);
}

// Función para encontrar el evento con el menor % de asistencia
export function findEventWithLowestAttendancePercentage(events) {
    return events.reduce((lowestAttendanceEvent, currentEvent) => {
        const lowestAttendancePercentage = calculateAttendancePercentage(lowestAttendanceEvent);
        const currentAttendancePercentage = calculateAttendancePercentage(currentEvent);

        return currentAttendancePercentage < lowestAttendancePercentage ? currentEvent : lowestAttendanceEvent;
    }, events[0]);
}

// Función para encontrar el evento con la mayor capacidad
export function findEventWithLargestCapacity(events) {
    return events.reduce((largestCapacityEvent, currentEvent) => {
        return currentEvent.capacity > largestCapacityEvent.capacity ? currentEvent : largestCapacityEvent;
    }, events[0]);
}

// Función para calcular el % de asistencia
export function calculateAttendancePercentage(event) {
    return Math.round((event.assistance / event.capacity) * 100);
}