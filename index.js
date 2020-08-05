document.addEventListener('DOMContentLoaded', main);

const dogs = [
    'Sammy',
    'Roscoe',
    'Bailey'
]

const dogsUI = document.getElementById('dogs-list');

function main() {
    document.getElementById('dog-save').addEventListener('click', saveDog);
    displayDogs();
}

function saveDog() {
    const name = document.getElementById('dog-name').value;
    dogs.push(name);
    addDogToUI(name);
}

function displayDogs() {
    for (let dog of dogs) {
        addDogToUI(dog);
    }
}
function addDogToUI(name) {
    let dogNameUI = document.createElement('div');
    dogNameUI.className = 'col-4';
    dogNameUI.innerText = name;

    let dogElement = document.createElement('div');
    dogElement.className = 'row';
    dogElement.appendChild(dogNameUI);

    dogsUI.appendChild(dogElement);
}

