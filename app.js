import get from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const randomBtn = get(".btn");

const showUser = async () => {
  // récupére l'utilisateur depuis l'api
  const person = await fetchUser();

  // affiche l'utilisateur
  displayUser(person);

  // appeler la fonction displayUser qui va afficher les informations et appelle les boutons
};

randomBtn.addEventListener("click", showUser);
window.addEventListener("DOMContentLoaded", showUser);

// récupère le bouton showUser, addeventListener = showUser,
