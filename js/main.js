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
let darkMode = document.querySelector('[data-dark-mode]');
let lightMode = document.querySelector('[data-light-mode]');

renderPokemon(pokemons);

function renderPokemon(pokemons) {
  elUL.innerHTML = "";
  pokemons.forEach(pokemon => elUL.appendChild(createElli(pokemon)));
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
  elTemp.querySelector("[data-delete]").dataset.pokemonId = pokemon.id

  return elTemp;
}

let a =0
elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  a-= 1
  const pokemon = {
    id:null,
    name: null,
    img: null,
    height: null,
    weight: null,
    type: [],
    weaknesses: [],
  };
  pokemon.id = a
  pokemon.name = elinput1.value;
  pokemon.img = elinput.value;
  pokemon.type = elinput2.value.split(" ");
  pokemon.weaknesses = elinput6.value.split(" ");
  pokemon.weight = `${elinput3.value} kg`;
  pokemon.height = `${elinput4.value} m`;

  pokemons.unshift(pokemon);
  renderPokemon(pokemons);
  console.log(pokemons);

  elinput1.value = ""
  elinput2.value = ""
  elinput3.value = ""
  elinput4.value = ""
  elinput6.value = ""
});
elinput3.addEventListener("input" , evt =>{
  if(elinput3.value < 1){
    elinput3.value = 1
  }if(elinput3.value > 500){
    elinput3.value = 500
  }
})
elinput4.addEventListener("input" , evt =>{
  if(elinput4.value > 1000){
    elinput4.value = 1000
  }if(elinput4.value < 1){
    elinput4.value = 1
  }
})
darkMode.addEventListener("click" , evt =>{
  evt.preventDefault()
  document.body.classList.add("dark-theme")
  lightMode.style.right = "10px"
  darkMode.style.right = "-100%"
})
lightMode.addEventListener("click" , evt =>{
  evt.preventDefault()
  document.body.classList.remove("dark-theme")
  darkMode.style.right = "10px"
  lightMode.style.right = "-100%"
})