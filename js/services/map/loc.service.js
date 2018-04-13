// const locs = [{lat: 11.22, lng: 22.11}]

// function getLocs1() {
//     return Promise.resolve(locs);
// }

// function getLocs() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(locs);
//         }, 2000)
//     });

// }
const mapKey = 'AIzaSyAaszUlZPo6U9RVD01ikA1FoLhE0W6oT6A';

function getPosition() {
    console.log('Getting Pos');
    
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function getAddress(address) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${mapKey}`)
        .then(function (res) {
            const loc = {
                coords: res.data.results[0].geometry.location,
                address: res.data.results[0].formatted_address
            };
            console.log('lng and lat of search', res.data.results[0].geometry.location);
            console.log('lng and lat of search', res.data.results[0].formatted_address);
            return loc;
        })
}

function getNameByCoords(lat, lng) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${mapKey}`)
        .then(function (res) {
            console.log('lng and lat of search', res.data.results[0].formatted_address);
            return res.data.results[0].formatted_address;
        })
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
    getPosition,
    getParameterByName,
    getAddress,
    getNameByCoords,
}