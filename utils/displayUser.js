import get from "./getElement.js";
import removeActive from "./removeActive.js";

// récuperer les élements html (query-selector) et les retourner dans la fonction displayUser

// sélectionner les boutons (active) quand on clique dessus

const img = get(`.user-img`);
const user = get(`.user-value`);
const title = get(`.user-title`);
const btns = document.querySelectorAll(".icon");
// affiche les infos de l'utilisateur
const displayUser = (person) => {
  img.src = person.large;
  title.textContent = "My name is";
  user.textContent = person.name;
  removeActive(btns);
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      removeActive(btns);
      title.textContent = `My ${label} is`;
      user.textContent = person[label];
      btn.classList.add("active");
    });
  });
};

export default displayUser;
