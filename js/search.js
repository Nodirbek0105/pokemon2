var elform2 = document.querySelector("[data-form2]");
var elinput5 = document.querySelector("[data-input5]");
var elSelect = document.querySelector("[data-select]");
var elSelectweaknesses = document.querySelector("[data-select-weaknesses]");
var elSelectSort = document.querySelector("[data-select-sort]");
var elSearch = document.querySelector("[data-search]");
var elclose = document.querySelector("[data-close]");
var elHeader = document.querySelector("[data-header]");

elSearch.addEventListener("click", function (evt) {
  evt.preventDefault();

  elform2.style.display = "flex";
  elclose.classList.remove("d-n");
  elSearch.setAttribute("class", "d-n");
  elHeader.classList.add("header");
});

elclose.addEventListener("click", function (evt) {
  evt.preventDefault();

  elinput5.value = "";
  elform2.style.display = "none";
  elclose.classList.add("d-n");
  elSearch.setAttribute("class", "");
  elHeader.classList.remove("header");
});

elinput5.addEventListener("input", function (evt) {
  evt.preventDefault();

  searchPokemon(pokemons);
});

elinput5.addEventListener("submit", function (evt) {
  evt.preventDefault();

  searchPokemon(pokemons);
});

elSelect.addEventListener("change", function (evt) {
  evt.preventDefault();

  typePokemon(pokemons);
});

elSelectweaknesses.addEventListener("change", function (evt) {
  evt.preventDefault();

  weaknessesPokemon(pokemons);
});

function typePokemon(pokemon) {
  elUL.innerHTML = "";
  if (elSelect.value == "type") {
    renderPokemon(pokemons);
  } else {
    renderPokemon(typeFilter(pokemon));
  }// pokemon.forEach(pokemoni => { //   const element = pokemoni.type // });
}

function weaknessesPokemon(pokemon) {
  elUL.innerHTML = "";

  if (elSelectweaknesses.value == "weaknesses") {
    renderPokemon(pokemon);
  } else {
    renderPokemon(weaknessFilter(pokemon));
  }
}

function searchPokemon(pokemons) {
  elUL.innerHTML = "";
  const searchArr = pokemons.filter((pokemon) =>
    pokemon.name.toUpperCase().includes(elinput5.value.toUpperCase().trim())
  );
  if (searchArr.length < 1) {
    elUL.innerHTML = "<li data-not-found>POKEMON NOT FOUND</li>";
  }
  if (searchArr.length > 0) {
    renderPokemon(searchArr);
  } // const searchArr = [] // pokemons.forEach(pokemon => { //   if (pokemon.name.toUpperCase().includes(elinput5.value.toUpperCase())) { //     searchArr.push(pokemon) //   } //}); // renderPokemon(searchArr) // console.log(searchArr)
}

function typeFilter(array) {
  let filteredTypeArray = pokemons.filter((element) => {
    if (element.type.includes(elSelect.value)) {
      return true;
    }
  });
  return filteredTypeArray;
}

function weaknessFilter(array) {
  let filteredWeaknessesArray = pokemons.filter((element) => {
    if (element.weaknesses.includes(elSelectweaknesses.value)) {
      return true;
    }
  });
  return filteredWeaknessesArray;
}

elSelectSort.addEventListener("change", (evt) => {
  evt.preventDefault();
  sortPokemon(pokemons);
});

function sortPokemon(pokemons) {
  if ((elSelectSort.value = "za")) {
    const sortedPokemon = pokemons.sort(
      (a, b) => b.name.charCodeAt() - a.name.charCodeAt()
    );
    renderPokemon(sortedPokemon);
    console.log(sortedPokemon);
  }
  if ((elSelectSort.value = "wu")) {
    const sortedPokemon = pokemons.sort(
      (a, b) => a.weight.charCodeAt() - b.weight.charCodeAt()
    );
    renderPokemon(sortedPokemon);
  }
  if ((elSelectSort.value = "wd")) {
    const sortedPokemon = pokemons.sort(
      (a, b) => b.weight.charCodeAt() - a.weight.charCodeAt()
    );
    renderPokemon(sortedPokemon);
    console.log(sortedPokemon);
  }
  if ((elSelectSort.value = "hd")) {
    const sortedPokemon = pokemons.sort(
      (a, b) => b.height.charCodeAt() - a.height.charCodeAt()
    );
    renderPokemon(sortedPokemon);
    console.log(sortedPokemon);
  }
  if ((elSelectSort.value = "hu")) {
    const sortedPokemon = pokemons.sort(
      (a, b) => a.height.charCodeAt() - b.height.charCodeAt()
    );
    renderPokemon(sortedPokemon);
    console.log(sortedPokemon);
  }
  if ((elSelectSort.value = "az")) {
    const sortedPokemon = pokemons.sort(
      (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
    );
    renderPokemon(sortedPokemon);
    console.log(sortedPokemon);
  }
}
