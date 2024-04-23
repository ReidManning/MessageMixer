// create lists of random phrases
const name = ['Jets', 'Giants', 'Cardinals', 'Dolphins'];
const result = ['win', 'lose'];
const pointDiff = [20, 40, 55, 60, 75, 99, 100];

let randomPhrase = [];

// create random numbers for phrases

let getRandomIndex = (list) => {
    return Math.floor(Math.random() * list.length);
}


// create list for final output

const randomName = (name[getRandomIndex(name)]);
const randomResult = (result[getRandomIndex(result)]);
const randomPointDiff = (pointDiff[getRandomIndex(pointDiff)]);

randomPhrase.push(randomName);
randomPhrase.push(randomResult);
randomPhrase.push(randomPointDiff);

//console.log(randomPhrase);

console.log(`The ${randomName} will ${randomResult} by ${randomPointDiff} points!`);