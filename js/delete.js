let elDelete = document.querySelector("[data-delete]"); // let elStar = document.querySelector("[data-star]");
let elStarBorder = document.querySelector("[data-star-border]");
let elBody = document.querySelector("[data-body]");
let innerT = "<li data-not-found>POKEMON NOT FOUND</li>";
let elBtnFavourites = document.querySelector("[data-btn-favourite]");
let favouritedPokemonArr = [];

elUL.addEventListener("click", (evt) => {
  deletePokemon(evt);
  favouritedPokemon(evt);
  // delteFavouritedPokemon(evt)
});

elBtnFavourites.addEventListener("click", (evt) => {
  evt.preventDefault();
  renderPokemon(getP());
});

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
  console.log(evt.key);
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
  let id = +elT.dataset.pokemonFavouriteId;
  elT.innerText = "ADDED";
  elT.parentElement.classList.add("delete-btn-remove");
  const favouritedP = pokemons.find((a) => a.id == +id);
  favouritedP.num = Number(favouritedP.num);
  if (!favouritedPokemonArr.includes(favouritedP)) {
    favouritedPokemonArr.push(favouritedP);
  }
  favouritedPokemonArr.sort((a, b) => a.id - b.id);
  elT.setAttribute("data-remove-pokemon-favourite-id", `${id}`);
  elT.removeAttribute("data-pokemon-favourite-id");
  setP(favouritedPokemonArr);
  return favouritedPokemonArr;
}
// function delteFavouritedPokemon(e) {
//   let elT = e.target.closest("[data-remove-pokemon-favourite-id]");
//   if (!elT) return;
//   let id = +elT.dataset.pokemonRemoveFavouriteId;
//   elT.innerText = "ADD IN FAVOURITES";
//   elT.parentElement.classList.remove("delete-btn-remove");
//   const favouritedP = pokemons.find((a) => a.id == +id);
//   // favouritedP.num = (favouritedP.num).toString();
//   // const notFavouritedP = favouritedPokemonArr.findIndex((a) => a.id == +id);
//   // favouritedPokemonArr.splice(notFavouritedP , 1)
//   // favouritedPokemonArr.sort((a, b) => a.id - b.id);
//   elT.setAttribute("data-pokemon-favourite-id",`${id}`);
//   elT.removeAttribute("data-remove-pokemon-favourite-id")
//   setP(favouritedPokemonArr);
//   return favouritedPokemonArr;
// }

function deletePokemon(e) {
  let elT = e.target.closest("[data-pokemon-id]");
  if (!elT) return;
  let id = +elT.dataset.pokemonId;
  const pokemonI = pokemons.findIndex((a) => a.id == +id);
  const deleteP = pokemons.splice(pokemonI, 1);
  console.log(pokemonI); // renderPokemon(pokemons)
  elT.parentElement.parentElement.parentElement.remove();
  if (pokemons.length < 1) {
    elUL.innerHTML = innerT;
  }
}
function getP() {
  let poke = localStorage.getItem("ac" || "[]");
  let pokem = JSON.parse(poke);
  return pokem;
}
function setP(array) {
  let poke = array;
  let pok = JSON.stringify(poke);
  localStorage.setItem("ac", `${pok}`);
}
