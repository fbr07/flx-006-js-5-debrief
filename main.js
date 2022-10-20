console.log("loaded")
let names = ["Michele", "Denise", "Aubrie", "Jack", "Phil",
    "Lee", "Same", "John", "Frank", "Smith"];
const getNamesButton = document.getElementById("namesRandom");

function generateRandomNames() {
    const randomNames = []
    for (let i = 0; i < 4; i++) {
        const fournames = names[Math.floor(Math.random() * names.length)];
        randomNames.push(fournames)
    }
    return randomNames
}
console.log(generateRandomNames())

getNamesButton.onclick = generateRandomNames;


/* let names = ["Michele", "Denise", "Aubrie", "Jack", "Phil", "Lee", "Same", "John", "Frank", "Smith"];
function randomFunc(names) {
    const randomNames = []
    for (let i = 0; i < 4; i++) {
        const random = names[Math.floor(Math.random() * names.length)];
        randomNames.push(random)
    }
    return randomNames
}
console.log(randomFunc(names)); */
