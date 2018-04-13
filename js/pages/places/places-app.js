import placeService from "../../services/places/place.service.js";
import placesMap from "../../cmps/places/places-map.js";

import placeList from '../../cmps/places/place-list.js'
import placeDetails from '../../cmps/places/place-details.js'
import placeEdit from '../../cmps/places/place-edit.js'

import locService from "../../services/map/loc.service.js";
import mapService from "../../services/map/map.service.js";

export default {
    template: `
    <section class="places-app section">
        <h1 class="title">places App</h1>


    <div class="map-container box">
        <h1 class="title is-4">Map-container</h1>
        <input type="text" placeholder="search">
        
        <button>My location</button>
        <!-- <div class="map">
            MAP GOES HERE! -->
            <places-map></places-map>
        </div>
          </div>

         <place-list :places="places"  @selected="selectPlace"></place-list>

        <place-details v-if="selectedPlace"  :place="selectedPlace" @goToEdit="editPlace" @delete="deletePlace"></place-details>
        <p v-else>{{ selectedPlaceMsg }}</p>
        <place-edit v-if="editMode"  :place="selectedPlace" @edit="editPlace" @close="closeEdit"></place-edit>

        
    </section>
    `,
    data() {
        return {
            gLoc: null,
            places: [],
            selectedPlace: null,
            filter: null,
            editMode: false,
            selectedPlaceMsg: 'Choose a place to see details'
        }
    },
    created() {
        placeService.query()
            .then(places => {

                console.log('places-app:got places query :', places);
                this.places = places;

            })

    },
    methods: {
        selectPlace(idx) {
            this.selectedPlace = this.places[idx];
        },
        closeEdit() {
            this.editMode=false;
        },

        editPlace(place) {
            console.log('place to edit from emit:', place);
          this.editMode=true;
            // placeService.editPlace(place)
            //     .then(places => {
            //         this.places = places;
            //         this.selectedPlace = null;
            //         this.selectedPlaceMsg = 'Updated, Choose a place to see details.';
        
            //     })

        },
        deletePlace(place) {
            console.log('place to delete from emit:', place.id);
            placeService.deletePlace(place.id)
                .then(places => {
                    this.places = places;
                    this.selectedPlace = null;
                    this.selectedPlaceMsg = 'Deleted, Choose a place to see details.';
        
                })

        }

    },
    computed: {
        
    },
    components: {
        placeService,
        placeList,
        placeDetails,
        placeEdit,
        placesMap
    }


}