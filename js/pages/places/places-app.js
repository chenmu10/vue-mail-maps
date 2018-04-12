import placesService from "../../services/places/place.service.js";

import placeList from '../../cmps/places/place-list.js'
import placeDetails from '../../cmps/places/place-details.js'

export default {
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

   <place-list></place-list>

   
   <place-details></place-details>

    


    </section>
    `,
    components: {
        placesService,
        placeList,
        placeDetails
    }


}