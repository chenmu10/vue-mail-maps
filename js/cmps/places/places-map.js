import mapService from "../../services/map/map.service.js";

export default {
    props: {
        places: {
            type: Array,
            required: true
        }
    },
    template: `
    <section class="box">
    
    <input id="map-search-input" class="input" type="text" placeholder="Find address.." @input="autocomplete">

    <button class="button is-info is-outlined">My location</button>
        <div id="map" style="height: 400px; width: 400px;"></div>
    </section>
    `,
    mounted() {
        mapService.initMap()
            .then(() => {
                console.log('mounted');

                mapService.setMarkers(this.places);

            });


    },

    methods: {
        autocomplete() {
            mapService.autocomplete();
        },
    },
    components: {
        mapService
    }
}