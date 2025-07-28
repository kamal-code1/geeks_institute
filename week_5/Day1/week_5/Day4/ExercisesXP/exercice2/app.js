import people from './data.js';


function calculateAverageAge(personArray) {
    if (personArray.length === 0) {
        console.log("No people in the array.");
        return;
    }

    const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / personArray.length;
    console.log(`Average Age: ${averageAge.toFixed(2)}`);
}

calculateAverageAge(people);
