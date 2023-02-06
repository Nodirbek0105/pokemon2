var elUL = document.querySelector("[data-ul]");
var elinput = document.querySelector("[data-input]");
var elinput1 = document.querySelector("[data-input1]");
var elinput2 = document.querySelector("[data-input2]");
var elinput3 = document.querySelector("[data-input3]");
var elinput4 = document.querySelector("[data-input4]");
var elinput6 = document.querySelector("[data-input6]");
var elform = document.querySelector("[data-form]");
var elNavbar = document.querySelector(".navbar");
var elContainer = document.querySelector("[data-container]");
var elTemplate = document.querySelector("template");

renderPokemon(pokemons);

function renderPokemon(pokemons) {
  elUL.innerHTML = "";
  pokemons.forEach((pokemon) => elUL.appendChild(createElli(pokemon)));
}

function createElli(pokemon) {
  const elTemp = elTemplate.content.cloneNode(true);

  elTemp.querySelector("[data-img]").src = pokemon.img;
  elTemp.querySelector("[data-img]").alt = `img pokemon ${pokemon.name}`;
  elTemp.querySelector(".name").textContent = pokemon.name;
  elTemp.querySelector(".type").textContent = pokemon.type;
  elTemp.querySelector(".weaknesses").textContent = pokemon.weaknesses;
  elTemp.querySelector(".kg").textContent = pokemon.weight;
  elTemp.querySelector(".height").textContent = pokemon.height;

  return elTemp;
}

elform.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const pokemon = {
    name: null,
    img: null,
    height: null,
    weight: null,
    type: [],
    weaknesses: [],
  };

  pokemon.name = elinput1.value;
  pokemon.img = elinput.value;
  pokemon.type = elinput2.value.split(" ");
  pokemon.weaknesses = elinput6.value.split(" ");
  pokemon.weight = `${elinput3.value} kg`;
  pokemon.height = `${elinput4.value} m`;

  pokemons.unshift(pokemon);
  renderPokemon(pokemons);

  elinput1.value = ""
  elinput2.value = ""
  elinput3.value = ""
  elinput4.value = ""
  elinput6.value = ""
});
elinput3.addEventListener("input" , evt =>{
  if(elinput3.value < 1){
    elinput3.value = 1
  }if(elinput3.value > 300){
    elinput3.value = 300
  }
})
elinput4.addEventListener("input" , evt =>{
  if(elinput4.value > 10){
    elinput4.value = 10
  }if(elinput4.value < 1){
    elinput4.value = 1
  }
})