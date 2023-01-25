var elUL = document.querySelector("[data-ul]");
var elinput = document.querySelector("[data-input]");
var elinput1 = document.querySelector("[data-input1]");
var elinput2 = document.querySelector("[data-input2]");
var elinput3 = document.querySelector("[data-input3]");
var elinput4 = document.querySelector("[data-input4]");
var elform = document.querySelector("[data-form]");
var elTemplate = document.querySelector("template");

renderPokemon(pokemons);

function renderPokemon(pokemons) {
  elUL.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    elUL.appendChild(createElli(pokemon));
  }
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
  };
  pokemon.name = elinput1.value;
  pokemon.img = elinput.value;
  pokemon.type = elinput2.value.split(" ");
  pokemon.weight = `${elinput3.value} kg`;
  pokemon.height = `${elinput4.value} m`;

  pokemons.unshift(pokemon);
  renderPokemon(pokemons);
  // elinput.value = "";
  elinput1.value = "";
  elinput2.value = "";
  elinput3.value = "";
  elinput4.value = "";
});
