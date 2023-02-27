let container = document.getElementById("card")

let eventosPresentes = [
    {
        _id: 1,
        "image": "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        "name": "Collectivities Party",
        "date": "2021-12-12",
        "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category": "Food Fair",
        "place": "Room A",
        "capacity": 45000,
        "assistance": 42756,
        "price": 5
    },
    {
        _id: 5,
        "image": "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        "name": "Comicon",
        "date": "2021-02-12",
        "description": "For comic lovers, all your favourite characters gathered in one place.",
        "category": "Costume Party",
        "place": "Room C",
        "capacity": 120000,
        "assistance": 110000,
        "price": 54
    },
    {
        _id: 12,
        "image": "https://i.postimg.cc/05FhxHVK/book4.jpg",
        "name": "Just for your kitchen",
        "date": "2021-11-09",
        "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category": "Book Exchange",
        "place": "Room D6",
        "capacity": 130000,
        "assistance": 90000,
        "price": 100
    },
    {
        _id: 13,
        "image": "https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name": "Batman",
        "date": "2021-3-11",
        "description": "Come see Batman fight crime in Gotham City.",
        "category": "Cinema",
        "place": "Room D1",
        "capacity": 11000,
        "assistance": 9300,
        "price": 225
    },
]

const fragment = document.createDocumentFragment();

function verCards(array, contenedor) {
    for (let carta of array) {
        let div = document.createElement('div');
        div.className = "card"
        div.innerHTML += `
        <img class="card-img-top" src="${carta.image}"/>
        <div class="card-body">
            <h3 style="color:#ffffff">${carta.name}</h3>
            <p>${carta.category}</p>
            <button class="card-button"><a href="/pages/details.html">SEE MORE</a></button>
            </div>   `
        fragment.appendChild(div)
    }
    contenedor.appendChild(fragment)
}
verCards(eventosPresentes, container)
