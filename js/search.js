var elform2 = document.querySelector("[data-form2]");
var elform3 = document.querySelector("[data-form3]");
var elinput5 = document.querySelector("[data-input5]");
var elSelect = document.querySelector("[data-select]");
var elSearch = document.querySelector("[data-search]");
// var elclose = document.querySelector("[data-close]");

elSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  elform2.style.display = "block";
  elSearch.src = "./img/close.svg";
  elSearch.setAttribute("data-close", "");
  elSearch.removeAttribute("data-search");
});
elclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  elform2.style.display = "none";
  elclose.src = "./img/search.svg";
  elSearch.setAttribute("data-search", "");
  elclose.removeAttribute("data-close");
});

elform2.addEventListener("submit", function (evt) {
  evt.preventDefault();
  for (i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];
    if (elinput5.value == element.name) {
      elUL.innerHTML = "";
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
      elinput5.value = "";
    }
  }
});
elform3.addEventListener("submit", function (evt) {
  evt.preventDefault();
  for (i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];
    if (elSelect.value == element.type) {
      elUL.innerHTML = "";
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
      elinput5.value = "";
    }
  }
});
