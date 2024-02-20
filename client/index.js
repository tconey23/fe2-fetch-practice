console.log('so fetch!')

// GET Lesson:

// 1. Make a GET request on page load to get all of the users for a given resource, and log those items to the console.
var jsCollection = document.querySelector('.js-collection')
var animalName = document.querySelector('#animal-name')
var animalDiet = document.querySelector('#animal-diet')
var animalFact = document.querySelector('#animal-fact')
// let userData
//     fetch('http://localhost:3001/api/v1/users')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach((user) => {
//             jsCollection += `${user.name} \n`
//         })
//     })
//     .catch(err => console.log(err))
// 2. Make a GET request on page load  to get all of the sports items for a given resource, and log those items to the console.
// fetch('http://localhost:3001/api/v1/sport-teams')
// .then(response => response.json())
// .then(data => data.forEach((animal) => {
//                 jsCollection += `${animal.name} \n`
//             }))
// .catch(err => console.log(err))
// Let's hook it up to the DOM!
// 3. When the user clicks the "Log animals!" button, make a GET request to get all of the animals, and log them to the console.

function fetchAnimal(){
    fetch('http://localhost:3001/api/v1/animals')
    .then(response => response.json())
    .then(data => {jsCollection.innerText = '',
                    data.forEach((animal) => {
                    jsCollection.innerText += `Name: ${animal.name}, Diet: ${animal.diet}, Fun fact: ${animal.fun_fact} \n \n`
                }), 
                console.log(data)})
    .catch(err => console.log(err))
            }

document.querySelector('.js-log-animals').addEventListener('click', () => {
    fetchAnimal()
            })
// 4. 🌶 On page load, GET all users and populate the section (.js-collection) with that information. We should see a <p> element for each user that contains text about that user. For example, "Travis Rollins is online and enjoys music, software, and gaming."



// STOP!
// Don't do the next section until the POST lesson!

// POST Lesson:
// 1. Make a POST request to create a new instance of that resource, and log the result to the console.
function postNew(postData) {
fetch('http://localhost:3001/api/v1/animals', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))
}

// 2. Rerun your previous GET fetch request to verify you added the new resource

// 3. Add an event listener, so that when you click button.js-add-item (comment this back in the HTML file!), it will make a fetch request to POST that item to the server, AND update the page with the newly updated collection
document.querySelector('.js-new-animals').addEventListener('click', (e) => {
    e.preventDefault()
    const newAnimal = {
        id: 1, 
        name: animalName.value, 
        diet: animalDiet.value, 
        fun_fact: animalFact.value
    }
console.log(newAnimal)
    postNew(newAnimal)
            })
// Spicy Challenge:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if not all params are sent with the POST)
