let container = document.getElementById("card")

let eventosPresentes = [
    {
        _id: 7,
        "image": "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name": "Metallica in concert",
        "date": "2022-01-22",
        "description": "The only concert of the most emblematic band in the world.",
        "category": "Music Concert",
        "place": "Room A"
        , "capacity": 138000,
        "estimate": 138000,
        "price": 150
    },
    {
        _id: 3,
        "image": "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        "name": "Jurassic Park",
        "date": "2021-11-02",
        "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category": "Museum",
        "place": "Field",
        "capacity": 82000,
        "assistance": 65892,
        "price": 15
    },
    {
        _id: 8,
        "image": "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        "name": "Electronic Fest",
        "date": "2021-01-22",
        "description": "The best national and international DJs gathered in one place.",
        "category": "Music Concert",
        "place": "Room A",
        "capacity": 138000,
        "assistance": 110300,
        "price": 250
    },
    {
        _id: 4,
        "image": "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name": "Parisian Museum",
        "date": "2022-11-02",
        "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
        "category": "Museum",
        "place": "Paris",
        "capacity": 8200,
        "estimate": 8200,
        "price": 3500
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

