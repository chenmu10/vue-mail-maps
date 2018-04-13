import placeService from "../../services/places/place.service.js";


export default {
    props: { places: { type: Array, required: true } },
    data() {
        return {
            filter: null
        }
    },

    methods: {
        emitSelected(idx) {
            console.log('selected');
            this.$emit('selected', idx);
        },
        setFilter(filter) {
            console.log('filterrr');
            
            placeService.query(filter)
            .then(places => {
                console.log('places-app:got places query FILTER :', places);
                this.places = places;

            })

        }
    },
    template: `
            <section>

            <div class="places">
                    <h1 class="title is-2">place-list</h1>
                    <input type="text" name="search" placeholder="search"  v-model="filter" @input="setFilter">
                    <div class="places-list">
                      <ul>
                        <li v-for="(place, idx) in places" :key="place.id" >
                       <button @click="emitSelected(idx)">{{place.name}},{{place.id}} </button> 
                       
                        </li>
                      </ul>
                    </div>
                </div>
            </section>
`,
components: {
    placeService
}
}