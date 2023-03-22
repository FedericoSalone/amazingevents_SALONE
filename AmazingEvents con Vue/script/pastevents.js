// Definimos nuestra aplicación Vue
const app = Vue.createApp({
    data() {
    return {
    searchText: '',
    selectedCategories: [], // Array de categorías seleccionadas por el usuario
    data: [], // Array de eventos
    categories: [], // Array de categorías únicas de los eventos
    filterDate: '2023-03-10', // fecha de referencia para filtrar eventos
    };
    },
    async created() {
    const apiUrl = '/script/amazing.json';
    try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    this.data = data.events; // Se guarda el array de eventos en el objeto de datos de Vue
    this.categories = [...new Set(data.events.map(event => event.category))]; // Se guardan las categorías únicas de los eventos en el objeto de datos de Vue
    } catch (error) {
    console.log(error);
    }
    },
    computed: {
    filteredData() {
    const searchText = this.searchText.toLowerCase();
    const selectedCategories = this.selectedCategories;
    return this.data.filter((event) => {
    const nameMatch = event.name.toLowerCase().includes(searchText);
    const descriptionMatch = event.description.toLowerCase().includes(searchText);
    const dateMatch = !this.filterDate || new Date(event.date) <= new Date(this.filterDate);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(event.category);
    return (nameMatch || descriptionMatch || dateMatch) && categoryMatch;
    });
    }
    }
    });
    
    app.mount('#app');


