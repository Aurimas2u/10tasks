/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById('output');

function showCars(){
    fetch(ENDPOINT)
    .then((res) =>  res.json())
    .then((data) => {
        drawCars(data);
    });
    };

showCars();

    function drawCars(array) {
        for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div');
        card.setAttribute("class", "card");
      let brand = '';
      let model = '';
      brand += `<h2>${array[i].brand}</h2>`;
      for (let a = 0; a < array[i].models.length; a++) {
      model += `<p>${a + 1}. ${array[i].models[a]}</p>`
    }
    card.innerHTML += brand;
    card.innerHTML += model;
      output.append(card);
        }
    };