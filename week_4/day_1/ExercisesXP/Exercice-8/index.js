// Partie I
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        const p = document.createElement('p');
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    addIngredients('apple', 'banana', 'orange');
}

makeJuice('medium');


// Partie II
function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        const p = document.createElement('p');
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('pineapple', 'mango', 'strawberry');

    displayJuice();
}

makeJuice('large');
