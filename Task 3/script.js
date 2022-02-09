/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const message = document.getElementById('message');
const button = document.getElementById('btn');
const output = document.getElementById('output');

function getUsers(){
fetch(ENDPOINT)
.then(res => res.json())
    .then((data) => {
    drawCards(data);
});
};

function drawCards(array) {
    message.remove();
    output.style = `background-image: linear-gradient(to right, rgba(100,27,100,137), rgba(57,5,200,100)); text-align: center;`
    for (let i = 0; i < array.length; i++) {
    let card = document.createElement('div');
  card.style = 'width: 120px; height: 120px; display: inline-block; margin: 10px;';
  let photo = '';
  let name = '';
  photo += `<img style="width: 100px; height: 100px;" src='${array[i].avatar_url}'>`
  name += `<p style="background-color: grey; color: white;">${array[i].login}</p>`
  card.innerHTML += photo;
  card.innerHTML += name;
  output.append(card);
    }
};

button.addEventListener('click', (e) => {
    getUsers();
    button.disabled = true;
});