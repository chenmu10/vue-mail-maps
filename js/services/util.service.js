function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeid(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getCurrency(currencyCode) {
    switch (currencyCode) {
        case 'ILS':
            return '₪';
        case 'EUR':
            return '€';
        case 'USD':
            return '$';
        default:
            return '';
    }
}

function getDesc() {
    let descs = ['Tel Aviv is the second most populous city in Israel – after Jerusalem – and the most populous city in the conurbation' +
        'of Gush Dan, Israel\'s largest metropolitan area. Located on the country\'s Mediterranean coastline and with a population of 438,818, it is the' +
        'financial and technological center of the country. Silicon Wadi is another name for Gush Dan, in comparison to Silicon Valley in the U.S. state of' +
        ' California.', 'Jerusalem is a city in the Middle East, located on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea. It is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity and Islam. Israelis and Palestinians both claim Jerusalem as their capital, as Israel maintains its primary governmental institutions there and the State of Palestine ultimately foresees it as its seat of power; however, neither claim is widely recognized internationally.'
    ]

    return descs[getRandomInt(0, 1)];

}

export default {
    getRandomInt,
    getRandomString: makeid,
    getCurrency,
    getDesc
}