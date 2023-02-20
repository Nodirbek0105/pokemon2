let elUL = document.querySelector("[data-ul]");
let elinput = document.querySelector("[data-input]");
let elinput1 = document.querySelector("[data-input1]");
let elinput2 = document.querySelector("[data-input2]");
let elinput3 = document.querySelector("[data-input3]");
let elinput4 = document.querySelector("[data-input4]");
let elinput6 = document.querySelector("[data-input6]");
let elform = document.querySelector("[data-form]");
let elNavbar = document.querySelector(".navbar");
let elContainer = document.querySelector("[data-container]");
let elTemplate = document.querySelector("template");
let darkMode = document.querySelector("[data-dark-mode]");
let lightMode = document.querySelector("[data-light-mode]");
let elClear = document.querySelector("[data-clear]");
let elAdd = document.querySelector("[data-add]");

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
  elTemp.querySelector("[data-delete]").dataset.pokemonId = pokemon.id;

  return elTemp;
}

let a = 0;

elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  a = a - 1;
  const pokemon = {
    id: null,
    name: null,
    img: null,
    height: null,
    weight: null,
    type: [],
    weaknesses: [],
  };
  pokemon.id = a;
  pokemon.name = elinput1.value;
  pokemon.img = elinput.value;
  pokemon.type = elinput2.value.split(" ");
  pokemon.weaknesses = elinput6.value.split(" ");
  pokemon.weight = `${elinput3.value} kg`;
  pokemon.height = `${elinput4.value} m`;

  pokemons.unshift(pokemon);
  renderPokemon(pokemons);
  console.log(pokemons);

  elinput1.value = "";
  elinput2.value = "";
  elinput3.value = "";
  elinput4.value = "";
  elinput5.value = "";
  elinput6.value = "";
});

elinput3.addEventListener("input", (evt) => {
  if (elinput3.value < 1) {
    elinput3.value = 1;
  }
  if (elinput3.value > 500) {
    elinput3.value = 500;
  }
});

elinput4.addEventListener("input", (evt) => {
  if (elinput4.value > 1000) {
    elinput4.value = 1000;
  }
  if (elinput4.value < 1) {
    elinput4.value = 1;
  }
});

darkMode.addEventListener("click", (evt) => {
  evt.preventDefault();
  document.body.classList.add("dark-theme");
  lightMode.style.right = "0";
  darkMode.style.right = "-100%";
});

lightMode.addEventListener("click", (evt) => {
  evt.preventDefault();
  document.body.classList.remove("dark-theme");
  darkMode.style.right = "0";
  lightMode.style.right = "-100%";
});

elClear.addEventListener("click", (evt) => {
  elinput5.value = "";
});

elAdd.addEventListener("click", (evt) => {
  evt.preventDefault();
  let promptenter = prompt("You want add new Pokemon , if you want write yes");
  if (promptenter == "yes") {
    elAdd.style.display = "none";
    elform.style.display = "flex";
  }
});