import placeService from "../../services/places/place.service.js";
import placesMap from "../../cmps/places/places-map.js";

import placeList from '../../cmps/places/place-list.js'
import placeDetails from '../../cmps/places/place-details.js'
import placeEdit from '../../cmps/places/place-edit.js'

import locService from "../../services/map/loc.service.js";
import mapService from "../../services/map/map.service.js";

import eventbus, { GOOGLE_AUTOCOMPLETE } from './../../services/event-bus.service.js';

export default {
    template: `
    <section class="places-app flex section">
      
    <place-list :places="places" @selected="selectPlace" @filtered="setFilter"></place-list>
    
    <places-map  :places="places"></places-map>
    
    <place-details v-if="selectedPlace&&!editMode" :place="selectedPlace" @goToEdit="editPlace" @delete="deletePlace"></place-details>

        <div v-else class="message is-info">
            <div class="message-body">
                {{ selectedPlaceMsg }}
            </div>
        </div>
   

        <place-edit v-if="editMode" :place="selectedPlace" @edit="editPlace" @close="closeEdit"></place-edit>


</section>
    `,
    data() {
        return {
            gLoc: null,
            places: [],
            selectedPlace: null,
          
            editMode: false,
            selectedPlaceMsg: 'Choose a place to see details'
        }
    },
    created() {
        eventbus.$on(GOOGLE_AUTOCOMPLETE, newPlace => {
            this.selectedPlace = newPlace;
            this.editMode = true;
        })
        placeService.query()
            .then(places => {

                console.log('places-app:got places query :', places);
                this.places = places;

            })
        

            },
            methods: {
                selectPlace(idx) {
                    this.selectedPlace = this.places[idx];
                    mapService.setCenter(this.selectedPlace)
                },
                closeEdit() {
                    this.editMode = false;
                },

                editPlace(place) {
                    console.log('place to edit from emit:', place);
                    this.editMode = true;
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
                            this.selectedPlaceMsg = 'Deleted. Choose a place to see details.';

                        })

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
            computed: {

            },
            components: {
                placeService,
                placeList,
                placeDetails,
                placeEdit,
                placesMap,
                eventbus
            }


    }