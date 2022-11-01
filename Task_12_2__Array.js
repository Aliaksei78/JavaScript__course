'use strict'

let planets = [
    { planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395 },
    { planet: "Venus", radius: 6052, density: 5.24, distance: 0.723 },
    { planet: "Earth", radius: 6378, density: 5.52, distance: 1 },
    { planet: "Mars", radius: 3396, density: 3.93, distance: 1.53 },
    { planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21 },
    { planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551 },
    { planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213 },
    { planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07 }
]

console.log('___________________________________Task_1__________________________________');
const printPlanets = ((array) => {
    array.forEach(planet => {
        console.log(`planet: ${planet.planet}, radius: ${planet.radius}, density: ${planet.density}, distance: ${planet.distance}`)
    });
});

printPlanets(planets);


console.log('\n___________________________________Task_2__________________________________');
/* let new_planets = planets.map((current) => {
    let temp = current;                                         // the same as  let temp = Object.assign({}, current);
    temp.solarSystem = true;
    return temp;
}); */

let new_planets = planets.map((planet) => {
    return Object.assign({}, planet, { solarSystem: true });   // cool! but commented way above is better for supporting
});

const printNewPlanets = ((array) => {
    array.forEach(planet => {
        console.log(`planet: ${planet.planet}, radius: ${planet.radius}, density: ${planet.density}, distance: ${planet.distance}, solarSystem: ${planet.solarSystem}`);
    });
});

printNewPlanets(new_planets);                                                                   // nice but not flexible (manual control)

new_planets.forEach(planet => {
    console.log(JSON.stringify(planet));                                                        // enough readable but too many quotes in one line
})

new_planets.forEach(planet => {
    console.log(JSON.stringify(planet, '', 2));                                                 // mimic stdout, not bad
})

new_planets.forEach(planet => {
    console.log(Object.keys(planet).map(key => key + ': ' + planet[key]).join(', '));           // nice and flexible
})

new_planets.forEach(planet => {
    console.log(Object.entries(planet).map(([key, value]) => key + ': ' + value).join(', '));   // nice and flexible too
})


console.log('\n___________________________________Task_3__________________________________');
new_planets.push({ planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false });
printNewPlanets(new_planets);


console.log('\n___________________________________Task_4__________________________________');
const total_radius = new_planets.reduce((total, planet) => {
    if (Number.isFinite(planet.radius)) {
        total += planet.radius;
    }
    return total;
}, 0);

console.log("The total radius of the planets: " + total_radius);


console.log('\n___________________________________Task_5__________________________________');
const getPlanetsWithDistance = ((array, excepted_distance) => {
    let searched = array.filter(planet => planet.distance > excepted_distance);
    return searched;
});

console.log("====Planets with distance > 5 ====");
printNewPlanets(getPlanetsWithDistance(new_planets, 5));


console.log('\n___________________________________Task_6__________________________________');
const deletePlanetByName = ((array, planetName) => {
    let index = array.findIndex(planet => planet.planet === planetName);
    if (index != -1) {
        array.splice(index, 1)
    }
});

deletePlanetByName(new_planets, "SomeNewPlanet");
printNewPlanets(new_planets);


console.log('\n___________________________________Task_7__________________________________');
const sortPlanetsByRadius = (array => {
    array.sort((a, b) => a.radius - b.radius);
});

sortPlanetsByRadius(new_planets);
printNewPlanets(new_planets);


console.log('\n___________________________________Task_8__________________________________');
const sortPlanetsByName = (array => {
    array.sort((a, b) => {
        if (a.planet > b.planet) {
            return 1;
        }
        if (a.planet < b.planet) {
            return -1;
        }
        return 0;
    });
});

sortPlanetsByName(new_planets);
printNewPlanets(new_planets);


console.log('\n___________________________________Task_9__________________________________');
console.log(`array length: ${new_planets.length}`)


console.log('\n___________________________________Task_10_________________________________');
// see: cypress\tests\Task_10_Converter.js