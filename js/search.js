var elform2 = document.querySelector("[data-form2]");
var elform3 = document.querySelector("[data-form3]");
var elWeaknesses = document.querySelector("[data-form-weaknesses]");
var elinput5 = document.querySelector("[data-input5]");
var elSelect = document.querySelector("[data-select]");
var elSelectweaknesses = document.querySelector("[data-select-weaknesses]");
var elSearch = document.querySelector("[data-search]");
var elclose = document.querySelector("[data-close]");
var elHeader = document.querySelector("[data-header]");

elSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  elform2.style.display = "flex";
  elclose.classList.remove("d-n");
  elSearch.setAttribute("class", "d-n");
  elHeader.classList.add("header")
});

elclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  elform2.style.display = "none";
  elclose.classList.add("d-n");
  elSearch.setAttribute("class", "");
  elHeader.classList.remove("header")
});

elinput5.addEventListener("input", function (evt) {
  evt.preventDefault();
  searchPokemon(pokemons);
  // elinput5.value = ""
});

elSelect.addEventListener("change", function (evt) {
  evt.preventDefault();
  typePokemon(pokemons)
});

elSelectweaknesses.addEventListener("change", function (evt) {
  evt.preventDefault();
  weaknessesPokemon(pokemons)
});

function typePokemon(pokemon) {
  elUL.innerHTML = "";
  pokemon.forEach(pokemoni => {
    const element = pokemoni.type
    if (elSelect.value == "all") {
      elUL.appendChild(createElli(pokemoni))
    }
    if (element.includes(elSelect.value)) {
      elUL.appendChild(createElli(pokemoni))
    } 
  });
}


function weaknessesPokemon(pokemon) {
  elUL.innerHTML = "";
  pokemon.forEach(pokemoni => {
    const element = pokemoni.weaknesses
    if (elSelectweaknesses.value == "all") {
      elUL.appendChild(createElli(pokemoni))
    }
    if (element.includes(elSelectweaknesses.value)) {
      elUL.appendChild(createElli(pokemoni))
    } 
  });
}

function searchPokemon(pokemons) {
  elUL.innerHTML = "";
  const searchArr = []
  pokemons.forEach(pokemon => {
    if (pokemon.name.toUpperCase().includes(elinput5.value.toUpperCase())) {
      searchArr.push(pokemon)
    }
    // elUL.appendChild(createElli(pokemon));
    renderPokemon(searchArr)
  });
}