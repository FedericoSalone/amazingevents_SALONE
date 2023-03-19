import { findEventWithHighestAttendancePercentage, findEventWithLowestAttendancePercentage, findEventWithLargestCapacity, calculateAttendancePercentage } from "./funciones.js";


const url = '../script/amazing.json';

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const events = data.events;
        // Encontrar los eventos con el mayor % de asistencia, menor % de asistencia y mayor capacidad
        const eventWithHighestAttendancePercentage = findEventWithHighestAttendancePercentage(data.events).name;

        const eventWithLowestAttendancePercentage = findEventWithLowestAttendancePercentage(data.events).name;
        const eventWithLargestCapacity = findEventWithLargestCapacity(data.events).name;

        // Agregar los datos a la tabla
        const eventTable = document.querySelector('#event-stats');
        eventTable.innerHTML = `
        <tr>
        <td>${eventWithHighestAttendancePercentage}</td>
        <td>${eventWithLowestAttendancePercentage}</td>
        <td>${eventWithLargestCapacity}</td>
        </tr>
        `;

        // Variables para pastEvents y UpcomingEvents
        const pastEvents = events.filter(event => event.date <= data.currentDate);
        const upcomingEvents = events.filter(event => event.date >= data.currentDate);

        const groupedPEvents = {};
        const groupedUEvents = {};

        // Recorremos pastEvents 
        pastEvents.forEach(event => {
            if (groupedPEvents[event.category]) {
                groupedPEvents[event.category].push(event);
            } else {
                groupedPEvents[event.category] = [event];
            }
        });

        // Recorremos upcomingEvents
        upcomingEvents.forEach(event => {
            if (groupedUEvents[event.category]) {
                groupedUEvents[event.category].push(event);
            } else {
                groupedUEvents[event.category] = [event];
            }
        });

        // Ganancias y porcentajes de asistencia para pastEvents
        Object.keys(groupedPEvents).forEach((category) => {
            const eventsP = groupedPEvents[category];

            let categoryRevenue = 0;
            let totalTicketsSold = 0;
            let totalTicketsAvailable = 0;

            eventsP.forEach(event => {
                categoryRevenue += event.assistance * event.price;
                totalTicketsSold += event.assistance;
                totalTicketsAvailable += event.capacity;
            });

            const attendancePercentage = (totalTicketsSold / totalTicketsAvailable) * 100;

            // Imprimimos tabla 
            const categoryTable = document.querySelector("#past-events-table");

            const row = document.createElement("tr");
            const categoryCell = document.createElement("td");
            const revenueCell = document.createElement("td");
            const attendanceCell = document.createElement("td");

            categoryCell.textContent = category;
            revenueCell.textContent = `$${categoryRevenue.toFixed(0)}`;
            attendanceCell.textContent = `${attendancePercentage.toFixed(0)}%`;

            row.appendChild(categoryCell);
            row.appendChild(revenueCell);
            row.appendChild(attendanceCell);

            categoryTable.appendChild(row);
        });

        // Ganancias y porcentajes de asistencia para upcomingEvents por categoría
        Object.keys(groupedUEvents).forEach((category) => {
            const eventsU = groupedUEvents[category];

            let revenue = 0;
            let sold = 0;
            let available = 0;

            eventsU.forEach(event => {
                revenue += event.estimate * event.price;
                sold += event.estimate;
                available += event.capacity;
            });

            const upcomingStats = (sold / available) * 100;

            // Imprimimos tabla
            const upcomingTable = document.querySelector("#upcoming-events-table");

            const row = document.createElement("tr");
            const categoryCell = document.createElement("td");
            const revenueCell = document.createElement("td");
            const attendanceCell = document.createElement("td");

            categoryCell.textContent = category;
            revenueCell.textContent = `$${revenue.toFixed(0)}`;
            attendanceCell.textContent = `${upcomingStats.toFixed(0)}%`;

            row.appendChild(categoryCell);
            row.appendChild(revenueCell);
            row.appendChild(attendanceCell);

            upcomingTable.appendChild(row);
        });
    

    } catch (error) {
        console.error('Error fetching data', error);
    }
}

fetchData();


