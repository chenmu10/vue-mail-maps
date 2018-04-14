import utilService from '../util.service.js';
import storageService from '../storage.service.js';
import LoremIpsum from '../loremIpsum.js'
import eventBus, {
    USR_MSG_DISPLAY
} from '../event-bus.service.js';

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
                console.log(filter);
                console.log(places[0].name.toLowerCase());

                return placesDB.filter(place => place.name.toLowerCase().includes(filter) ||
                    place.address.toLowerCase().includes(filter) ||
                    place.desc.toLowerCase().includes(filter));
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

    places = [{
        id: 1,
        name: 'Coding Academy',
        address: 'Habonim 4, Ramat Gan',
        coords: {lat:32.088142, lng:34.802829},
        desc: 'Full stack 3 months course.',
        tag: 'Training',
        imgs: ['https://picsum.photos/150/150/?random', 'https://loremflickr.com/150/150', 'https://picsum.photos/150/150/?random']
    }, {
        id: 2,
        name: 'Avi\'s place',
        address: 'Toval 38, Ramat Gan',
        coords: {lat:32.085623, lng:34.802829},
        desc: 'best pizza in town.',
        tag: 'Food',
        imgs: ['https://picsum.photos/150/150/?random', 'https://picsum.photos/150/150/?random', 'https://loremflickr.com/150/150']
    }, {
        id: 3,
        name: 'Cofix',
        address: 'Hahilazon 1, Ramat  Gan',
        coords: {lat:32.087256, lng:34.803901} ,
        desc: 'This is a place.',
        tag: 'Food',
        imgs: ['https://picsum.photos/150/150/?random', 'https://loremflickr.com/150/150', 'https://picsum.photos/150/150/?random']
    }]


    // for (let index = 0; index < 3; index++) {
    //     var place = createPlace();
    //     places.push(place);
    // }

    return places;
}

var gId = 0;

function createPlace() {
    var loremIpsum = new LoremIpsum();

    var placeTags = ['food', 'attraction', 'sights', 'shopping'];
    var placeCoords = [{
        lat: 32.088240,
        lng: 34.802857
    }, {
        lat: 32.085476,
        lng: 34.801226
    }, {
        lat: 32.087968,
        lng: 34.806741
    }];
    var placeAddress = ['Street 5, Tel Aviv, Israel', 'Street 7, Jerusalem, Israel', 'Street 12, Haifa, Israel'];
    var placeDescs = ['A good pizza place. ', 'A famous site with great view', 'Gift shop. Closed on monday.'];
    var placeImgs = ['https://picsum.photos/150/150/?random', 'https://picsum.photos/150/150/?random', 'https://picsum.photos/150/150/?random'];

    var place = {
        id: utilService.getRandomString(11),
        name: 'Place' + ' ' + ++gId,
        address: placeAddress[gId - 1],
        coords: placeCoords[gId - 1],
        desc: placeDescs[gId - 1],
        tag: placeTags[utilService.getRandomInt(0, placeTags.length)],
        imgs: placeImgs
    }

    return place;
}