import utilService from '../util.service.js';
import storageService from '../storage.service.js';
import LoremIpsum from '../loremIpsum.js'
import eventBus, {USR_MSG_DISPLAY} from '../event-bus.service.js';

const KEY = 'placesAppKey';
var placesDB = [];

export default {
    query,
    getById,
    editPlace,
    deletePlace,
    // filterPlaces
}


function query(filter = null) {

    return storageService.load(KEY)
        .then(places => {

            if (!places) {
                places = generatePlaces();
                storageService.store(KEY, places);
            }

            placesDB = places;

            if (filter === null) {
                return placesDB;
            } else {
                return placesDB.filter(place => place.name.includes(filter.byText) ||
                                                place.address.includes(filter.byText) ||
                                                place.desc.includes(filter.byText));
            }
        })
}




// function filterPlaces(filter) {

//     let filteredPlaces = placesDB.filter(place => place.name.includes(filter.byText) || place.address.includes(filter.byText) ||
//         place.desc.includes(filter.byText));

//     return filteredplaces;
// }


function getById(placeId) {
    return storageService.load(KEY)
        .then(places => {
            console.log('places:', places);

            return places.find(place => place.id === placeId);
        })
}

function deletePlace(placeId) {
    return storageService.load(KEY)
        .then(places => {

            var placeIdx = places.findIndex(place => place.id === placeId);
            places.splice(placeIdx, 1);
            console.log('delete place:', places);

            storageService.store(KEY, places);
            return places;
        })
}


function editPlace(place) {
    return storageService.load(KEY)
        .then(places => {

            if (place.id) {
                var placeIdx = places.findIndex(currPlace => currPlace.id === place.id)
                places.splice(placeIdx, 1, place);
            } else {
                place.id = utilService.getRandomString(11);
                places.push(place);
            }

            console.log('editPlace places:', places);

            storageService.store(KEY, places);
            return places;
        });
}



function generatePlaces() {
    var places = [];
    for (let index = 0; index < 10; index++) {
        var place = createPlace();
        places.push(place);
    }
    return places;
}

var gId = 1;

function createPlace() {
    var loremIpsum = new LoremIpsum();

    var placeTags = ['food', 'attraction', 'sights', 'shopping'];
    var placeCoords = [{lat:32.088240, lng:34.802857},{lat:32.085476, lng: 34.801226},{lat:32.087968 , lng:34.806741}];
    var placeAddress = ['Street 5, Tel Aviv, Israel', 'Street 7, Jerusalem, Israel', 'Street 12, Haifa, Israel'];
    var placeImgs = ['https://placeimg.com/150/150/nature', 'https://placeimg.com/150/150/nature', 'https://placeimg.com/150/150/nature'];

    var place = {
        id: utilService.getRandomString(11),
        name: 'Place' + ' ' + gId++,
        address: placeAddress[utilService.getRandomInt(0, placeAddress.length)],
        coords: placeCoords[utilService.getRandomInt(0, placeCoords.length)],
        desc:  utilService.getDesc(),
        tag: placeTags[utilService.getRandomInt(0, placeTags.length)],
        imgs: placeImgs
    }

    return place;
}
