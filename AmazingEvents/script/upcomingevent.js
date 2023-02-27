let container = document.getElementById("card")

let eventosPresentes = [
    {
        _id: 2,
        "image": "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name": "Korean style",
        "date": "2022-08-12",
        "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category": "Food Fair",
        "place": "Room A",
        "capacity": 45000,
        "assistance": 42756,
        "price": 10
    },
    {
        _id: 6,
        "image": "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name": "Halloween Night",
        "date": "2022-02-12",
        "description": "Come with your scariest costume and win incredible prizes.",
        "category": "Costume Party",
        "place": "Room C",
        "capacity": 12000,
        "estimate": 9000,
        "price": 12
    },
    {
        _id: 10,
        "image": "https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name": "15K NY",
        "date": "2022-03-01",
        "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category": "Race",
        "place": "New York",
        "capacity": 3000000,
        "assistance": 2569800,
        "price": 3
    },
    {
        _id: 14,
        "image": "https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name": "Avengers",
        "date": "2022-10-15",
        "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category": "Cinema",
        "place": "Room D1",
        "capacity": 9000,
        "estimate": 9000,
        "price": 250
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
