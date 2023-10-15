/*
Exo 1 : Le taxi
John essaie de rentrer chez lui en taxi.
Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
rouges de chez lui.
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
qu’il lui a fallu x changements de taxi pour y arriver
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
Nous avons besoin d’une liste de 5 musiques dont Anissa - Wejdene
Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements
*/
class Personnage {
  constructor(prenom, santeMentale) {
    this.prenom = prenom;
    this.santeMentale = santeMentale;
  }
}

class Trajet {
  constructor() {
    this.musiques = ["Musique 1", "Musique 2", "Musique 3", "Musique 4", "Anissa - Wejdene"];
    this.nbFeuxRouges = 30;
    this.nbChangementsTaxi = 0;
  }

  jouerMusique() {
    return this.musiques[Math.floor(Math.random() * this.musiques.length)];
  }
}

let john = new Personnage("John", 10);
let trajet = new Trajet();

while (trajet.nbFeuxRouges > 0) {
  let musique = trajet.jouerMusique();
  trajet.nbFeuxRouges--;

  if (musique === "Anissa - Wejdene") {
    john.santeMentale--;
    trajet.nbChangementsTaxi++;
  }

  console.log(`Musique jouée:${musique}`);
  console.log(`Feux rouges restants: ${trajet.nbFeuxRouges}`);

  if (john.santeMentale === 0) {
    console.log("Explosion");
    break;
  }

  if (trajet.nbFeuxRouges === 0) {
    console.log(`Bien arrivé! Nombre de changements de taxi: ${trajet.nbChangementsTaxi}`);
    break;
  }
}
