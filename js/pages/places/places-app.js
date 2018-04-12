import placesService from "../../services/places/place.service.js";

import placeList from '../../cmps/places/place-list.js'
import placeDetails from '../../cmps/places/place-details.js'

export default {
    data() {
        return {
            places: [],
            selectedPlaces: null,
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


   <place-details  :email="selectedPlace" ></place-details>

    


    </section>
    `,
     methods: {
        selectPlace(idx) {
            this.selectedPlace = this.places[idx];
            
            
        },
        setFilter(filter) {
        },
        saveEmail(email) {

        }
        
    },
    components: {
        placesService,
        placeList,
        placeDetails
    }


}