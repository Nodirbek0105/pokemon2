let elDelete = document.querySelector("[data-delete]"); // let elStar = document.querySelector("[data-star]");
let elStarBorder = document.querySelector("[data-star-border]");
let elBody = document.querySelector("[data-body]");
let innerT = "<li data-not-found>POKEMON NOT FOUND</li>";
let elBtnFavourites = document.querySelector("[data-btn-favourite]");
let elFavoritedP = document.querySelector("[data-ul2]");
let elModal = document.querySelector("[data-modal]");
let closeM = document.querySelector("[data-close-modal]");

let favouritedPokemonArr;
if (getP() !== null) {
  favouritedPokemonArr = getP();
}
if (getP() === null) {
  favouritedPokemonArr = [];
}

closeM.addEventListener("click", (evt) => {
  modalOpen(elModal);
});

elUL.addEventListener("click", (evt) => {
  deletePokemon(evt);
  favouritedPokemon(evt);
  // removeFavouritedPokemon(evt);
});

elBtnFavourites.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalOpen(elModal);
  if (getP() !== null) {
    renderFavoritedP(getP());
  }
});

// function renderFavoritedP(array) {
//   if (array !== []) {
//     let text = "";
//     array.forEach((item) => {
//       if (!text.includes(item.name) && item.num === Number(item.num)) {
//         text += `<li class="d-flex bg-primary">${item.name}</li>`;
//       }
//     });
//     elFavoritedP.innerHTML = text;
//   }
// }

function renderFavoritedP(array) {
  let ul = document.querySelector("[data-ul2]");
  ul.innerHTML = ""
  array.forEach((pokemon) => {
    if (pokemon.num !== Number(pokemon.num)) {
      let index = pokemon.id;
      const favouritedPIndex = array.findIndex((a) => a.id == +index);
      array.splice(favouritedPIndex, 1);
    }
  });

  if (array !== []) {
    if (array.length > 2) {
      ul.parentElement.parentElement.classList.add("align-items-start");
    }
    ul.innerHTML = "";
    array.forEach((pokemon) => {
      if (
        (!ul.innerHTML.includes(pokemon.name) &&
          pokemon.num === Number(pokemon.num)) ||
        (pokemon.id > 1 && !ul.innerHTML.includes(pokemon.name) &&
        pokemon.num === Number(pokemon.num))) {
        ul.append(createElli(pokemon));
      }
    });
  }
  if (ul.innerHTML === "") {
    let ul = document.querySelector("[data-ul2]");
    ul.innerHTML = "<li data-not-found>FAVOURITED POKEMONS NOT FOUND</li>";
  }
  setP(array);
}

elBody.addEventListener("click", (evt) => {
  modalCloseModal(evt);
});

function modalOpen(el) {
  el.classList.toggle("d-n");
  el.classList.toggle("d-flex");
}

function modalCloseModal(e) {
  let elM = e.target.closest("[data-modal]");
  let elMC = e.target.closest("[data-modal-content]");
  if (!elM) return;
  if (elMC) return;
  // if (elM) {
  modalOpen(elM);
  // }
}

elSelect.addEventListener("change", (evt) => {
  elinput5.value = "";
});

elSelectSort.addEventListener("change", (evt) => {
  elinput5.value = "";
});

elSelectweaknesses.addEventListener("change", (evt) => {
  elinput5.value = "";
});

window.addEventListener("keydown", (evt) => {
  if (evt.key == "Escape") {
    mode(darkMode, lightMode, elBody); // document.body.classList.toggle("dark-theme")  darkMode.classList.toggle("right-nol");  darkMode.classList.toggle("right-yuz");  lightMode.classList.toggle("right-nol");  lightMode.classList.toggle("right-yuz");
  }
});

function mode(el1, el2, body = document.body) {
  body.classList.toggle("dark-theme");
  el1.classList.toggle("right-nol");
  el1.classList.toggle("right-yuz");
  el2.classList.toggle("right-nol");
  el2.classList.toggle("right-yuz");
}

function favouritedPokemon(e) {
  let elT = e.target.closest("[data-pokemon-favourite-id]");
  if (!elT) return;
  if (elT.textContent === "ADD IN FAVOURITES") {
    let id = +elT.dataset.pokemonFavouriteId;
    elT.innerText = "ADDED";
    // elT.parentElement.classList.add("delete-btn-remove");
    const favouritedP = pokemons.find((a) => a.id == +id);
    const favouritedPId = pokemons.findIndex((a) => a.id == +id);
    favouritedPokemonArr.forEach((pokemon) => {
      if (pokemon.num !== Number(pokemon.num)) {
        let index = pokemon.id;
        const favouritedPIndex = pokemons.findIndex((a) => a.id == +index);
        favouritedPokemonArr.splice(favouritedPIndex, 1);
      }
    favouritedP.num = Number(favouritedP.num);
  });
    if (!favouritedPokemonArr.includes(favouritedP)) {
      favouritedPokemonArr.push(favouritedP);
    }
    favouritedPokemonArr.sort((a, b) => a.id - b.id);
    setP(favouritedPokemonArr);
    setAllP(pokemons);
    return favouritedPokemonArr;
  }
  if (elT.textContent === "ADDED") {
    let id = +elT.dataset.pokemonFavouriteId;
    elT.innerText = "ADD IN FAVOURITES";
    // elT.parentElement.classList.remove("delete-btn-remove");
    const favouritedP = pokemons.find((a) => a.id == +id);
    const favouritedPId = pokemons.findIndex((a) => a.id == +id);
    favouritedP.num = favouritedP.num.toString().padStart(5, "0");
    favouritedPokemonArr.splice(favouritedPId, 1);
    favouritedPokemonArr.forEach((pokemon) => {
      if (pokemon.num !== Number(pokemon.num)) {
        let index = pokemon.id;
        const favouritedPIndex = pokemons.findIndex((a) => a.id == +index);
        favouritedPokemonArr.splice(favouritedPIndex, 1);
      }
    });
    favouritedPokemonArr.sort((a, b) => a.id - b.id);
    setP(favouritedPokemonArr);
    setAllP(pokemons);
    return favouritedPokemonArr;
  }
}

function deletePokemon(e) {
  let elT = e.target.closest("[data-pokemon-id]");
  if (!elT) return;
  let id = +elT.dataset.pokemonId;
  const pokemonI = pokemons.findIndex((a) => a.id == +id);
  const pokemonD = pokemons.find((a) => a.id == +id);
  const deleteP = pokemons.splice(pokemonI, 1);
  if (favouritedPokemonArr.includes(pokemonD)) {
    const pokemonId = favouritedPokemonArr.findIndex((a) => a.id == +id);
    favouritedPokemonArr.splice(pokemonId, 1);
  }// renderPokemon(pokemons)
  elT.parentElement.parentElement.parentElement.remove();
  if (pokemons.length < 1) {
    elUL.innerHTML = innerT;
  }
  setAllP(pokemons);
}
