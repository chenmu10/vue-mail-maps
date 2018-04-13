import placeService from "../../services/places/place.service.js";
import placesMap from "../../cmps/places/places-map.js";

import placeList from '../../cmps/places/place-list.js'
import placeDetails from '../../cmps/places/place-details.js'

import locService from "../../services/map/loc.service.js";
import mapService from "../../services/map/map.service.js";

export default {
    data() {
        return {
            places: [],
            selectedPlace: { name: null }
        }
    },
    template: `
    <section class="places-app container">
        <h1>places App</h1>


    <div class="map-container">
        <h1 class="title is-2">Map-container</h1>
        <input type="text" name="search" placeholder="search">
        <button>My location</button>
        <!-- <div class="map">
            MAP GOES HERE! -->
            <places-map></places-map>
        </div>
    </div>

   <place-list :places="places"  @selected="selectPlace"></place-list>


 <place-details v-if="selectedPlace"  :place="selectedPlace" ></place-details>
    


    </section>
    `,
     data() {
        return {
            gLoc: null,
            places: [],
            selectedPlace: { name: null }
        }
    },
    created() {
        placeService.query()
            .then(places => {

                console.log('places-app:got places query :', places);
                this.places = places;
                this.selectedPlace = places[0];

            })

    }    ,
     methods: {
        selectPlace(idx) {
            this.selectedPlace = this.places[idx];
            
            
        },
        setFilter(filter) {
        }
        
    },
    components: {
        placeService,
        placeList,
        placeDetails,
        placesMap
    }


}