let elDelete = document.querySelector("[data-delete]");
let elStar = document.querySelector("[data-star]");
let elStarBorder = document.querySelector("[data-star-border]");
let elBody = document.querySelector("[data-body]");

elBody.addEventListener("click", (evt) => {
  deletePokemon(evt);
});

function deletePokemon(e) {
  let elT = e.target.closest("[data-pokemon-id]");
  if (!elT) return;
  let id = +elT.dataset.pokemonId;
  const pokemonI = pokemons.findIndex((a) => a.id == id);
  const deleteP = pokemons.splice(pokemonI, 1);
  console.log(pokemonI);
  renderPokemon(pokemons);
}

// elStarBorder.addEventListener('click', evt =>{
//   elStar.classList.toggle("d-n")
//   elStarBorder.classList.toggle("d-n")
// })
// elStar.addEventListener('click', evt =>{
//   elStarBorder.classList.toggle("d-n")
//   elStar.classList.toggle("d-n")
// })
