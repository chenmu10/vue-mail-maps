

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
    switch(currencyCode){
        case 'ILS' : 
            return '₪';
        case 'EUR' : 
            return '€';
        case 'USD' :
            return '$';
        default:
            return '';
    }
}

export default {
    getRandomInt,
    getRandomString : makeid,
    getCurrency
}

