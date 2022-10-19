import Chance from 'chance'


let age = Chance().integer({ min: 0, max: 125 });


// 'if else' the best solution for this task
if (age <= 12) {
    console.log(`Your age ${age} years, you are child`);
} else if (age >= 13 && age <= 17) {
    console.log(`Your age ${age} years, you are teen`);
} else if (age >= 18 && age <= 64) {
    console.log(`Your age ${age} years, you are adult`);
} else {
    console.log(`Your age ${age} years, you are senior`);
}


// Using 'switch case' is possible for this task but it is not rational:
switch (age) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log(`Your age ${age} years, you are child`);
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log(`Your age ${age} years, you are teen`);
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
        console.log(`Your age ${age} years, you are adult`);
        break;
    default:
        console.log(`Your age ${age} years, you are senior`);
}


// Using ternary operator '?' in this case is good for computer but enough strange for human perception:
(age <= 12) ? console.log(`Your age ${age} years, you are child`) :
    (age >= 13 && age <= 17) ? console.log(`Your age ${age} years, you are teen`) :
        (age >= 18 && age <= 64) ? console.log(`Your age ${age} years, you are adult`) :
            console.log(`Your age ${age} years, you are senior`);