'use strict'

import Chance from 'chance';            // !! and insert "type": "module" in the package.json  !!
import { isSuperset, union, intersection, difference } from './utils/helper.js'


console.log('_______________Task_1______________');
let emptySet = new Set();
let currencySet = new Set(['USD', 'EUR', 'BYN']);
console.log(emptySet);
console.log(currencySet);
console.log(currencySet.size);


console.log('_______________Task_2______________');
currencySet.forEach(elem => console.log(elem));
for (let elem of currencySet) { console.log(elem) };           // the same as forEach
for (let elem of currencySet.keys()) { console.log(elem) };    // the same as forEach because Set is not Dictionary and key == value
for (let elem of currencySet.values()) { console.log(elem) };  // the same as forEach because Set is not Dictionary and key == value


console.log('_______________Task_3______________');
currencySet.add("GBR");
currencySet.forEach(elem => console.log(elem));
currencySet.add("USD");                                                                  // "USD" already exist, idle call
currencySet.forEach(elem => console.log(elem));
currencySet.add('CAD').add('NZD');
currencySet.forEach(elem => console.log(elem));
currencySet.forEach((elem, another_elem, set) => console.log(elem, another_elem, set));  // elem==another_elem only for Set, it's for work with Map
// for other collections forEach(elem, index, set)


console.log('_______________Task_4______________');
console.log('currencySet has "USD" value: ' + currencySet.has('USD'));
currencySet.delete('USD');
console.log('currencySet has "USD" value after deleting "USD": ' + currencySet.has('USD'));


console.log('_______________Task_5______________');
console.log(Chance().pickone([...currencySet]))  // [...Set]  make Array from Set
console.log(Chance().pickset([...currencySet], Chance().integer({ min: 1, max: currencySet.size })))


console.log('_______________Task_6______________');
let set_A = new Set([1, 2, 3, 4]),
    set_B = new Set([2, 3]),
    set_C = new Set([3, 4, 5, 6]);
console.log(isSuperset(set_A, set_B));     // => true
console.log(union(set_A, set_C));          // => Set [1, 2, 3, 4, 5, 6]
console.log(intersection(set_A, set_C));   // => Set [3, 4]
console.log(difference(set_A, set_C));     // => Set [1, 2]
console.log(difference(set_C, set_A));     // => Set [5, 6]
