let elDelete = document.querySelector("[data-delete]");
let elStar = document.querySelector("[data-star]");
let elStarBorder = document.querySelector("[data-star-border]");
let elBody = document.querySelector("[data-body]");

elUL.addEventListener("click", (evt) => {
  deletePokemon(evt);
});

function deletePokemon(e) {
  let elT = e.target.closest("[data-pokemon-id]");
  if (!elT) return;
  let id = +elT.dataset.pokemonId;
  const pokemonI = pokemons.findIndex((a) => a.id == +id);
  const deleteP = pokemons.splice(pokemonI, 1);
  console.log(pokemonI);
  elT.parentElement.parentElement.parentElement.remove();
  if (pokemons.length < 1) {
    elUL.innerHTML = "<li data-not-found>POKEMON NOT FOUND</li>";
  }
}

elStarBorder.addEventListener("click", (evt) => {
  elStar.classList.toggle("d-n");
  elStarBorder.classList.toggle("d-n");
});

elStar.addEventListener("click", (evt) => {
  elStarBorder.classList.toggle("d-n");
  elStar.classList.toggle("d-n");
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
    mode(darkMode, lightMode, elBody); // document.body.classList.toggle("dark-theme") // darkMode.classList.toggle("right-nol"); // darkMode.classList.toggle("right-yuz"); // lightMode.classList.toggle("right-nol"); // lightMode.classList.toggle("right-yuz");
  }
});

function mode(el1, el2, body = document.body) {
  body.classList.toggle("dark-theme");
  el1.classList.toggle("right-nol");
  el1.classList.toggle("right-yuz");
  el2.classList.toggle("right-nol");
  el2.classList.toggle("right-yuz");
}
