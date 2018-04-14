import {
    GoogleMapsApi
} from './gmap.class.js';

let map;
var markers = [];

function initMap(lat = 32.087888, lng = 34.8032042) {
    const gmapApi = new GoogleMapsApi();
    return gmapApi.load().then(() => {
        map = new google.maps.Map(
            document.querySelector('#map'), {
                center: {
                    lat,
                    lng
                },
                zoom: 15
            })
    });
}

function addTempMarker(place) {

    let marker = new google.maps.Marker({
        position: place.coords,
        map

    });
    setCenter(place.coords);
    attachMessage(place, marker);
}


function setMarkers(places) {
    places.forEach(place => {
        addMarker(place);
    });
}

var img = 'http://maps.google.com/mapfiles/ms/icons/blue.png';

function addMarker(place) {

    let marker = new google.maps.Marker({
        position: place.coords,
        icon: img,
        map

    });
    marker.id = place.id;



    attachMessage(place,marker);
  
    markers.push(marker);

}


function attachMessage(place, marker) {
    var infowindow = new google.maps.InfoWindow({
        content: `
        ${place.name},${place.address},${place.coords.lng}, ${place.coords.lat}
        `
    });

    marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);

    });
}


function setCenter(place) {


    map.setCenter(place.coords);

    // var infowindow = new google.maps.InfoWindow({
    //     content: `
    //     ${place.name},${place.address},${place.coords.lng}, ${place.coords.lat}
    //     `
    // });

  
    // if (markers.length > 0) {
    //     markers.forEach(marker => {
    //         marker.infowindow.close();
    //     });
    // }
  
    // var marker = markers.find(marker => marker.id === place.id)
    // infowindow.open(marker.get('map'), marker);
}


export default {
    initMap,
    addMarker,
    setCenter,
    setMarkers
}