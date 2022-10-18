'use strict'

console.log('___________________________________Task_1__________________________________');
let planets = new Map();
planets.set("Mercury", { radius: 2440, density: 5.43, distance: 0.395 });
planets.set("Venus", { radius: 6052, density: 5.24, distance: 0.723 });
planets.set("Earth", { radius: 6378, density: 5.52, distance: 1 });
planets.set("Mars", { radius: 3396, density: 3.93, distance: 1.53 });
planets.set("Jupiter", { radius: 71492, density: 1.33, distance: 5.21 });
planets.set("Saturn", { radius: 60268, density: 0.69, distance: 9.551 });
planets.set("Uranus", { radius: 25559, density: 1.27, distance: 19.213 });
planets.set("Neptune", { radius: 24764, density: 1.64, distance: 30.07 });
console.log(planets);


console.log('\n___________________________________Task_2__________________________________');
planets.forEach((value, key) => {
    console.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
    //console.log(key + ': ' + Object.entries(value).map(([objKey, objValue]) => objKey + ':' + objValue).join(', '))        // the same as above
})


console.log('\n___________________________________Task_3__________________________________');
planets.forEach((value, key, map) => {
    if (key == 'Saturn') {
        console.log(key + ': ' + Object.entries(map.get(key)).map(([objKey, objValue]) => objKey + ':' + objValue).join(', '))
    }
})

/* planets.forEach((value, key) => {                                                                         // the same as above but more obvious
    if (key == 'Saturn') {
        console.log(key + ': ' + Object.entries(value).map(([objKey, objValue]) => objKey + ':' + objValue).join(', '))
    }
}) */


console.log('\n___________________________________Task_4__________________________________');
console.log('Number of items in the collection: ' + planets.size)


console.log('\n___________________________________Task_5__________________________________');
let mySet = new Set(['Mercury', 'Not mercury', 'Mercur', 'MercuryMercury']);
for (let key of mySet) {
    if (planets.has(key)) {
        console.log(`Map 'planets' has key '${key}'`)
    } else
        console.log(`Map 'planets' does not have key '${key}'`)
}
console.log(mySet);


console.log('\n___________________________________Task_6__________________________________');
planets.delete('Uranus')
console.log(planets);


console.log('\n___________________________________Task_7__________________________________');
/* Maybe there is some joke in condition because 'Map' does not have method 'merge'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map */
let fantastic_planets = new Map();
fantastic_planets.set('Tatuin', { radius: 3027, density: 8.52, distance: 39.57 });
fantastic_planets.set('Solaris', { radius: 4195, density: 5.9, distance: 51.45 });
let merged = new Map([...planets, ...fantastic_planets]);
console.log(merged);


console.log('\n___________________________________Task_8__________________________________');
let planet = { planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395 }
for (let property in planet) {
    console.log(`Property: ${property}, value: ${planet[property]}`)
}