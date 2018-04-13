import { GoogleMapsApi } from './gmap.class.js';

let map;

function initMap(lat = 32.087888, lng = 34.8032042) {
    const gmapApi = new GoogleMapsApi();
    return gmapApi.load().then(() => {
        map = new google.maps.Map(
            document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
    });
}

function addMarker(loc) {
   
    let marker = new google.maps.Marker({
        position: loc,
        map,
        title: 'Your location!'
    });
}

function setCenter(loc) {
    map.setCenter(loc);
}



export default {
    initMap,
    addMarker,
    setCenter,
}