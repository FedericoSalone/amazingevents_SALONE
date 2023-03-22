
const app = Vue.createApp({
    data() {
        return {
            searchText: '',
            selectedCategories: [],
            data: [],
            categories: [],
            filterDate: '2023-03-10',
        };
    },
    async created() {
        const apiUrl = '/script/amazing.json';
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            this.data = data.events;
            this.categories = [...new Set(data.events.map(event => event.category))];
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
                const dateMatch = !this.filterDate || new Date(event.date) >= new Date(this.filterDate);
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(event.category);
                return (nameMatch || descriptionMatch || dateMatch) && categoryMatch;
            });
        }
    }
});

app.mount('#app');

// Función para actualizar la fecha de filtro
function updateFilterDate(date) {
    app.filterDate = date;
}


