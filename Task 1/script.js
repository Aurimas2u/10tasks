/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const submit = document.getElementById('submit-btn');
const input = document.querySelector('input');
const output = document.getElementById('output');

function converter(kg){
    output.innerHTML = '';
    lb = kg * 2.2046;
    g = kg / 0.0010000;
    oz = kg * 35.274;
    output.innerHTML += `<h1><b>${input.value}kg is equal to:</b></h1><p><em>${lb}lbs</em></p> <p><em>${g}g</em></p> <p><em>${oz}oz</em></p>`;
    input.value = '';
}

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    converter(input.value);
});