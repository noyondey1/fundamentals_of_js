var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'bhutan', 'paris'];

// tourDestinations.indexOf('bhutan');
console.log(tourDestinations.indexOf('bhutan'))

var fourthDestination = tourDestinations[3];
// console.log(fourthDestination);


if (tourDestinations[1] == 'nepal') {
    console.log('Pahare ahare ahare');
} else if (tourDestinations[1] == 'china') {
    console.log('china tor kache jamu na');
} else if (tourDestinations.length == 4) {
    console.log('aro taka ache aro beshi ghurmu');
} else {
    console.log('kothao jamu na bashay thakmu ar mosha marmu')
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <=myBudget) {
    console.log('ami dim khamu');
}

var lebuPrice = 32;
// var myBudget = 32;
if (lebuPrice >= myBudget) {
    console.log('ami lebu khamu');
}

console.log(6 >= 6);