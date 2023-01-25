var elform2 = document.querySelector("[data-form2]");
var elform3 = document.querySelector("[data-form3]");
var elinput5 = document.querySelector("[data-input5]");
var elSelect = document.querySelector("[data-select]");
var elSearch = document.querySelector("[data-search]");
var elclose = document.querySelector("[data-close]");

elSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  elform2.style.display = "block";
  elclose.classList.remove("d-n");
  elSearch.setAttribute("class", "d-n");
});

elclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  elform2.style.display = "none";
  elclose.classList.add("d-n");
  elSearch.setAttribute("class", "");
});

elform2.addEventListener("submit", function (evt) {
  evt.preventDefault();
  searchPokemon(pokemons);
});

elform3.addEventListener("submit", function (evt) {
  evt.preventDefault();
  typePokemon(pokemons)
});

function typePokemon(pokemon) {
  elUL.innerHTML = "";
  for (let i = 0; i < pokemon.length; i++) {
    const element = pokemon[i].type;
    if (elSelect.value == element) {
      elUL.appendChild(createElli(element))
    } 
    if (elSelect.value == element[0]) {
      elUL.appendChild(createElli(element))
    } 
    if (elSelect.value.includes(element[1])) {
      elUL.appendChild(createElli(element))
    } 
    if (elSelect.value.includes(element[2])) {
      elUL.appendChild(createElli(element))
    } 
  }
}

function searchPokemon(pokemons) {
  elUL.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    // const pokemoni = pokemons;
    if (elinput5.value.toUpperCase() == pokemon.name.toUpperCase()) {
      elUL.appendChild(createElli(pokemon));
    }
  }
}
