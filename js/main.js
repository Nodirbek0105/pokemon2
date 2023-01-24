var elUL = document.querySelector("[data-ul]");
var elinput = document.querySelector("[data-input]");
var elinput1 = document.querySelector("[data-input1]");
var elinput2 = document.querySelector("[data-input2]");
var elinput3 = document.querySelector("[data-input3]");
var elinput4 = document.querySelector("[data-input4]");
var elform = document.querySelector("[data-form]");
var elTemplate = document.querySelector("template")

// renderPokemon(pokemons)

// function renderPokemon(pokemons){
//   elUL.innerHTML = ""
//   pokemons.forEach(pokemons => {
//     elUL.appendChild(createElli(addCard(pokemons)))
//   });
// }

// function createElli(){
//   pokemons.forEach(pokemons => {
//     var elli = document.createElement("li")
//     elUL.appendChild(elli)
//   });
// }

// function addCard(pokemon){
//   const elli = elTemplate.content.cloneNode(true)
//   elli.querySelector("[data-img]").src = pokemon.img
//   elli.document.querySelector('.name').textContent = pokemon.name
//   elli.document.querySelector('.type').textContent = pokemon.type
//   elli.document.querySelector('.weaknesses').textContent = pokemon.weaknesses
//   elli.document.querySelector('.kg').textContent = pokemon.weight
//   elli.document.querySelector('.height').textContent = pokemon.height
//   return elli
// }


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
  elUL.innerHTML = "";

  for (i = 0; i < pokemons.length; i++) {
    const element = pokemons[i].img;
    const element2 = pokemons[i].name;
    const element3 = pokemons[i].type;
    const element4 = pokemons[i].weight;
    const element5 = pokemons[i].height;
    var elli = document.createElement("li");
    var eldivimg = document.createElement("div");
    var eldiv = document.createElement("div");
    var eldivright = document.createElement("div");
    var eldivleft = document.createElement("div");
    var eldivlefttop = document.createElement("div");
    var eldivleftbottom = document.createElement("div");
    var elpname = document.createElement("p");
    var elptype = document.createElement("p");
    var elpkg = document.createElement("p");
    var elpage = document.createElement("p");
    var elimg = document.createElement("img");
    var elimgHeart = document.createElement("img");

    elli.classList.add("elli");
    eldivimg.classList.add("eldivimg");
    eldiv.classList.add("eldiv");
    elimgHeart.classList.add("heart");
    eldivlefttop.classList.add("left-div");

    elimg.setAttribute("src", element);
    elimgHeart.setAttribute("src", "./img/heart.svg");
    eldivimg.classList.add("divImg");
    eldiv.classList.add("divParent");
    eldivleft.classList.add("divLeft");
    eldivright.classList.add("divRight");
    eldivleftbottom.classList.add("divLeftBottom");
    elpname.classList.add("name");
    elptype.classList.add("type");

    elpname.textContent = `${element2}`;
    elptype.textContent = `${element3}`;
    elpkg.textContent = `${element4}`;
    elpage.textContent = `${element5}`;
    elUL.appendChild(elli);
    elli.appendChild(eldivimg);
    eldivimg.appendChild(elimg);
    elli.appendChild(eldiv);
    eldiv.appendChild(eldivleft);
    eldiv.appendChild(eldivright);
    eldivright.appendChild(elimgHeart);
    eldivleft.appendChild(eldivlefttop);
    eldivleft.appendChild(eldivleftbottom);
    eldivlefttop.appendChild(elpname);
    eldivlefttop.appendChild(elptype);
    eldivleftbottom.appendChild(elpkg);
    eldivleftbottom.appendChild(elpage);
    // elButton.addEventListener("click", function (evt) {
    //   console.log(pokemon);
    // });
  }
  // elinput.value = "";
  elinput1.value = "";
  elinput2.value = "";
  elinput3.value = "";
  elinput4.value = "";
});

for (i = 0; i < pokemons.length; i++) {
  const element = pokemons[i].img;
  const element2 = pokemons[i].name;
  const element3 = pokemons[i].type;
  const element4 = pokemons[i].weight;
  const element5 = pokemons[i].height;
  const element6 = pokemons[i].weaknesses;
  var elli = document.createElement("li");
  var eldivimg = document.createElement("div");
  var eldiv = document.createElement("div");
  var eldivright = document.createElement("div");
  var eldivleft = document.createElement("div");
  var eldivlefttop = document.createElement("div");
  var eldivleftbottom = document.createElement("div");
  var elpname = document.createElement("p");
  var elptype = document.createElement("p");
  var elpkg = document.createElement("p");
  var elpweaknes = document.createElement("p");
  var elpage = document.createElement("p");
  var elimg = document.createElement("img");
  var elimgHeart = document.createElement("img");

  elli.classList.add("elli");
  eldivimg.classList.add("eldivimg");
  eldiv.classList.add("eldiv");
  elimgHeart.classList.add("heart");
  eldivlefttop.classList.add("left-div");

  elimg.setAttribute("src", element);
  elimgHeart.setAttribute("src", "./img/heart.svg");
  eldivimg.classList.add("divImg");
  eldiv.classList.add("divParent");
  eldivleft.classList.add("divLeft");
  eldivright.classList.add("divRight");
  eldivleftbottom.classList.add("divLeftBottom");
  elpname.classList.add("name");
  elptype.classList.add("type");

  elpname.textContent = `${element2}`;
  elptype.textContent = `${element3}`;
  elpkg.textContent = `${element4}`;
  elpage.textContent = `${element5}`;
  elpweaknes.textContent = element6;
  elUL.appendChild(elli);
  elli.appendChild(eldivimg);
  eldivimg.appendChild(elimg);
  elli.appendChild(eldiv);
  eldiv.appendChild(eldivleft);
  eldiv.appendChild(eldivright);
  eldivright.appendChild(elimgHeart);
  eldivleft.appendChild(eldivlefttop);
  eldivleft.appendChild(eldivleftbottom);
  eldivlefttop.appendChild(elpname);
  eldivlefttop.appendChild(elptype);
  eldivlefttop.appendChild(elpweaknes);
  eldivleftbottom.appendChild(elpkg);
  eldivleftbottom.appendChild(elpage);
  elimgHeart.addEventListener("click", function (evt) {
    evt.preventDefault();
    // elButton.addEventListener("click", function (evt) {
    //   console.log(pokemon);
    // });
  });
}


for (let i = 0; i < pokemons.length; i++) {
  const element = pokemons[i];
  const element2 = pokemons[i].next_evolution;
  var arr = []
  arr.push(element2.length)
  console.log(arr)
  
}
