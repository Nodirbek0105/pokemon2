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
// setAllP(pokemons)
renderPokemon(getAllP());



function renderPokemon(pokemons) {
  elUL.innerHTML = "";
  pokemons.forEach((pokemon) => {
    elUL.appendChild(createElli(pokemon))
  })
}

function createElli(pokemon) {
  const elTemp = elTemplate.content.cloneNode(true);
  if (pokemon.num !== Number(pokemon.num)) {
    elTemp.querySelector("[data-img]").src = pokemon.img;
    elTemp.querySelector("[data-img]").alt = `img pokemon ${pokemon.name}`;
    elTemp.querySelector(".name").textContent = pokemon.name;
    elTemp.querySelector(".type").textContent = pokemon.type;
    elTemp.querySelector(".weaknesses").textContent = pokemon.weaknesses;
    elTemp.querySelector(".kg").textContent = pokemon.weight;
    elTemp.querySelector(".height").textContent = pokemon.height;
    elTemp.querySelector(".btn-danger").dataset.pokemonId = pokemon.id;
    elTemp.querySelector(".btn-success").dataset.pokemonFavouriteId =
      pokemon.id;
      // elTemp.querySelector(".divLeft").classList.remove("delete-btn-remove")
      elTemp.querySelector(".btn-success").textContent = "ADD IN FAVOURITES"
  }
  if (pokemon.num === Number(pokemon.num)) {
    elTemp.querySelector("[data-img]").src = pokemon.img;
    elTemp.querySelector("[data-img]").alt = `img pokemon ${pokemon.name}`;
    elTemp.querySelector(".name").textContent = pokemon.name;
    elTemp.querySelector(".type").textContent = pokemon.type;
    elTemp.querySelector(".weaknesses").textContent = pokemon.weaknesses;
    elTemp.querySelector(".kg").textContent = pokemon.weight;
    elTemp.querySelector(".height").textContent = pokemon.height;
    // elTemp.querySelector(".divLeft").classList.add("delete-btn-remove")
    elTemp.querySelector(".btn-success").dataset.pokemonFavouriteId =
      pokemon.id;
    elTemp.querySelector(".btn-success").textContent = "ADDED";
  }
  return elTemp;
}

let a = 0;
let b = 152;
elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  id();
  num();
  const pokemon = {
    id: null,
    num: null,
    name: null,
    img: null,
    weight: null,
    type: [],
    weaknesses: [],
    height: null,
  };
  pokemon.id = a;
  pokemon.num = b.toString().padStart(5, 0);
  pokemon.name = elinput1.value;
  pokemon.img = elinput.value;
  pokemon.type = elinput2.value.split(" ");
  pokemon.weaknesses = elinput6.value.split(" ");
  pokemon.weight = `${elinput3.value} kg`;
  pokemon.height = `${elinput4.value} m`;

  pokemons.unshift(pokemon);
  setAllP(pokemons)
  renderPokemon(getAllP());
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
  mode(lightMode, darkMode); // document.body.classList.add("dark-theme");  darkMode.classList.toggle("right-nol");  darkMode.classList.toggle("right-yuz");  lightMode.classList.toggle("right-nol");  lightMode.classList.toggle("right-yuz");
});

lightMode.addEventListener("click", (evt) => {
  evt.preventDefault();
  mode(lightMode, darkMode); // document.body.classList.remove("dark-theme");  darkMode.classList.toggle("right-nol");  darkMode.classList.toggle("right-yuz");  lightMode.classList.toggle("right-nol");  lightMode.classList.toggle("right-yuz");
});

elClear.addEventListener("click", (evt) => {
  elinput5.value = "";
});
function id() {
  return --a;
}

function num() {
  return ++b;
}
function getP() {
  let poke = localStorage.getItem("ac" || "[]");
  let pokem = JSON.parse(poke);
  return pokem;
}
function setP(array) {
  let pok = JSON.stringify(array);
  localStorage.setItem("ac", `${pok}`);
}
function getAllP() {
  let poke = localStorage.getItem("abc" || "[]");
  let pokem = JSON.parse(poke);
  return pokem;
}
function setAllP(array) {
  let pok = JSON.stringify(array);
  localStorage.setItem("abc", `${pok}`);
}
