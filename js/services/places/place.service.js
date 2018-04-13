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
    var placeAddress = ['Tel aviv, Israel', 'Jerusalem, Israel', 'Haifa, Israel'];
    var placeImgs = ['https/google.com/a.png', 'https/google.com/b.png', 'https/google.com/c.png'];

    var place = {
        id: utilService.getRandomString(11),
        name: 'Place' + ' ' + gId++,
        address: placeAddress[utilService.getRandomInt(0, placeAddress.length)],
        coords: {lat:1,lng:1},
        desc: loremIpsum.generate(utilService.getRandomInt(5, 10), utilService.getRandomInt(1, 8)),
        tag: placeTags[utilService.getRandomInt(0, placeTags.length)],
        imgs: placeImgs
    }

    return place;
}
