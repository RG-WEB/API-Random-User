// https://randomuser.me/
const url = "https://randomuser.me/api/";

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    const {
      phone,
      email,
      name: { last, first },
      location: {
        street: { number, name: way },
      },
      dob: { age },
      login: { password },
      picture: { large },
    } = results[0];
    const name = `${last} ${first}`;
    const street = `${number} ${way}`;
    return { phone, email, name, street, age, password, large };
  } catch (error) {
    console.log(error);
    content.textContent = "Erreur trouvé !";
  }
};
export default fetchUser;

// Crée bloc try catch (6-9)
// récupérer l'objet data.results[0]
// destructurer data.result[0] et retourne un nouvel objet
//

// fetchUser: récupère les données et destructure
