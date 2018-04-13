import mapService from "../../services/map/map.service.js";

export default {
    template:`
    <section>
        <div id="map" style="height: 400px; width: 400px;"></div>
    </section>
    `,
    mounted(){
        mapService.initMap()
        .then(
            ()=>{
                console.log('mounted');
                
                mapService.addMarker({lat: 32.0749831, lng: 34.9120554});
            }
        );
    }
}