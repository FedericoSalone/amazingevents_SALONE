//data
import data from './datoscards.js';

let detailContainer = document.getElementById('details-container')

const queryString = location.search
const params = new URLSearchParams(queryString)
const cardID = params.get('id')
const  cardsDetails= data.events.find( cards => cards._id == cardID )


function cardDetails(cards, container) {
    let div = document.createElement('div')
    div.className = 'card mb-3 '
    div.style = 'max-width: 540px;'
    div.innerHTML = `
    <img class="card-img-top" src="${cards.image}" alt="foto"/>
    <div class="card-body p-1">
    <h4 style="color:#ffffff">${cards.name}</h4>
    <p>Date: ${cards.date}</p>
    <p>Description: ${cards.description}</p>
    <p>Category: ${cards.category}</p>
    <p>Place: ${cards.place}</p>
    <p>Capacity: ${cards.capacity}</p>
    <p>Price: $ ${cards.price}</p>
        `

    container.appendChild(div)
}

cardDetails(cardsDetails, detailContainer)