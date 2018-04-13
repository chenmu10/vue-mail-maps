import placesService from "../../services/places/place.service.js";

import placeList from '../../cmps/places/place-list.js'
import placeDetails from '../../cmps/places/place-details.js'

export default {
    data() {
        return {
            places: [{ name: 'place1' }, { name: 'place2' }, { name: 'place3' }],
            selectedPlace: { name: 'place1' }
        }
    },
    template: `
    <section class="places-app container">
        <h1>places App</h1>


    <div class="map-container">
        <h1 class="title is-2">Map-container</h1>
        <input type="text" name="search" placeholder="search">
        <button>My location</button>
        <div class="map">
            <canvas></canvas>
        </div>
    </div>

   <place-list :places="places"  @selected="selectPlace"></place-list>


   <place-details v-if="selectedPlace"  :place="selectedPlace" ></place-details>

    


    </section>
    `,
    created() {
        

           

    },
     methods: {
        selectPlace(idx) {
            this.selectedPlace = this.places[idx];
            
            
        },
        setFilter(filter) {
        }
        
    },
    components: {
        placesService,
        placeList,
        placeDetails
    }


}